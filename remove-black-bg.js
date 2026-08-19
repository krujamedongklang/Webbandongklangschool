import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read original PNG
const pngBuffer = fs.readFileSync(path.join(__dirname, 'โบว์ไวอาลัย.png'));

console.log('Original PNG size:', pngBuffer.length);
