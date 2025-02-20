const fs = require('fs');
const path = require('path');

// Pad naar het bestand met quotes en het uitvoerbestand
const quotesFile = path.join(__dirname, 'quotes.json');
const outputFile = path.join(__dirname, 'dailyQuote.txt');

// Quotes laden
const quotes = JSON.parse(fs.readFileSync(quotesFile, 'utf8'));

// Selecteer een quote op basis van de datum
const todayIndex = new Date().getDate() % quotes.length;
const todayQuote = quotes[todayIndex];

// Schrijf de quote naar een bestand
fs.writeFileSync(outputFile, todayQuote, 'utf8');

console.log(`Updated daily quote: ${todayQuote}`);
