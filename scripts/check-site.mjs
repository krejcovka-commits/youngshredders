import { readFileSync } from 'node:fs';

const requiredFiles = ['index.html', 'src/main.js', 'src/styles.css'];
const requiredText = [
  'Everything young riders need. One place for parents.',
  'Where to Ride',
  'Gear',
  'Academy',
  'Young Shredders',
];

for (const file of requiredFiles) {
  readFileSync(file, 'utf8');
}

const html = readFileSync('index.html', 'utf8');
const js = readFileSync('src/main.js', 'utf8');
const css = readFileSync('src/styles.css', 'utf8');
const bundle = `${html}\n${js}\n${css}`;

for (const text of requiredText) {
  if (!bundle.includes(text)) {
    throw new Error(`Missing required content: ${text}`);
  }
}

console.log('Site structure check passed.');
