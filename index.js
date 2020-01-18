const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

const inputFilePath = path.join(process.cwd(), 'input.txt');
const content = fs.readFileSync(inputFilePath, { encoding: 'utf-8' });

const lines = content.split('\r\n');

lines.forEach(gameName => {
  if (gameName !== '') {
    const encodedGameName = encodeURIComponent(gameName);
    const url = `https://store.steampowered.com/search/?term=${encodedGameName}`;
    shell.exec(`start chrome "${url}"`);
  }
});
