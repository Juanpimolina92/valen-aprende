import { mkdir, cp, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'dist');
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js']) await copyFile(resolve(root, file), resolve(output, file));
await cp(resolve(root, 'assets'), resolve(output, 'assets'), { recursive: true });
console.log('Web lista en dist/ — HTML, CSS, JavaScript y recursos locales.');
