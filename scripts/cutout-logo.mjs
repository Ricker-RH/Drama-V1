import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const input = '/Users/luoruihao/Desktop/抓马web/Logo.png';
const outDir = '/Users/luoruihao/Desktop/抓马web/apps/web/assets';
const outMain = path.join(outDir, 'logo-cutout.png');
const outLarge = path.join(outDir, 'logo-cutout-512.png');

const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
if (channels !== 4) throw new Error('Expected RGBA image');

const idx = (x, y) => (y * width + x) * 4;
const colorDist = (r, g, b, c) => {
  const dr = r - c[0];
  const dg = g - c[1];
  const db = b - c[2];
  return Math.sqrt(dr * dr + dg * dg + db * db);
};
const sat = (r, g, b) => {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  if (max === 0) return 0;
  return (max - min) / max;
};

const border = [];
for (let x = 0; x < width; x++) border.push([x, 0], [x, height - 1]);
for (let y = 1; y < height - 1; y++) border.push([0, y], [width - 1, y]);

const rs = [];
const gs = [];
const bs = [];
for (const [x, y] of border) {
  const i = idx(x, y);
  rs.push(data[i]); gs.push(data[i + 1]); bs.push(data[i + 2]);
}
const median = (arr) => {
  const a = [...arr].sort((m, n) => m - n);
  return a[Math.floor(a.length / 2)];
};
const bg = [median(rs), median(gs), median(bs)];

const visited = new Uint8Array(width * height);
const qx = new Int32Array(width * height);
const qy = new Int32Array(width * height);
let qh = 0;
let qt = 0;

const THRESHOLD = 126;

const isBgLike = (r, g, b) => {
  const d = colorDist(r, g, b, bg);
  const s = sat(r, g, b);
  const bright = (r + g + b) / 3;
  return d <= THRESHOLD || (s < 0.22 && bright > 30 && bright < 230);
};

const tryPush = (x, y) => {
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  const p = y * width + x;
  if (visited[p]) return;
  const i = p * 4;
  if (data[i + 3] === 0) return;

  if (isBgLike(data[i], data[i + 1], data[i + 2])) {
    visited[p] = 1;
    qx[qt] = x;
    qy[qt] = y;
    qt++;
  }
};

for (const [x, y] of border) tryPush(x, y);
while (qh < qt) {
  const x = qx[qh];
  const y = qy[qh];
  qh++;
  tryPush(x + 1, y);
  tryPush(x - 1, y);
  tryPush(x, y + 1);
  tryPush(x, y - 1);
}

for (let p = 0; p < visited.length; p++) {
  if (visited[p]) data[p * 4 + 3] = 0;
}

const trimmed = await sharp(data, { raw: { width, height, channels: 4 } }).trim().png().toBuffer();
await fs.mkdir(outDir, { recursive: true });
await sharp(trimmed)
  .extend({ top: 36, bottom: 36, left: 36, right: 36, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(outMain);

await sharp(outMain).resize(512, 512, { fit: 'inside' }).png().toFile(outLarge);

const removed = visited.reduce((a, b) => a + b, 0);
console.log('Saved:', outMain);
console.log('Saved:', outLarge);
console.log('BG median:', bg.join(','), 'removed pixels:', removed);
