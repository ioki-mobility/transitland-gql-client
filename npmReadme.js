const fs = require('fs');

const lines = fs.readFileSync('./README.md', 'utf8').split('\n');

const forbiddenLinesContain = ["#gh-dark-mode-only", "picture>", "<source media="];

const newText = lines.filter(line => {
    for (const forbiddenLine of forbiddenLinesContain) {
        if (line.includes(forbiddenLine)) {
            return false;
        }
    }
    return true;
}).join('\n');

fs.writeFileSync('./README.md', newText, 'utf8');
