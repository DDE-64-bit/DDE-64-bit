const fs = require('fs');
const path = require('path');

// Bestanden
const quotesFile = path.join(__dirname, 'quotes.json');
const readmeFile = path.join(__dirname, 'README.md');

// Quotes laden
const quotes = JSON.parse(fs.readFileSync(quotesFile, 'utf8'));

// Selecteer een quote op basis van de datum
const todayIndex = new Date().getDate() % quotes.length;
const todayQuote = quotes[todayIndex];

// Lees de README
let readmeContent = fs.readFileSync(readmeFile, 'utf8');

// Vervang de quote in README.md
const newReadmeContent = readmeContent.replace(
  /<!-- START_QUOTE -->[\s\S]*?<!-- END_QUOTE -->/,
  `<!-- START_QUOTE -->\n**"${todayQuote}"**\n<!-- END_QUOTE -->`
);

// Schrijf de update weg
fs.writeFileSync(readmeFile, newReadmeContent, 'utf8');

console.log(`Updated README with new quote: ${todayQuote}`);
