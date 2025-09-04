#!/usr/bin/env node

const https = require('https');

// Get coin from command line arguments or default to bitcoin
const coin = process.argv[2] || 'bitcoin';

// Validate coin name
if (!coin || typeof coin !== 'string' || coin.trim() === '') {
    console.log('❌ Please provide a valid coin name.');
    console.log('💡 Example: node crypto-price.js bitcoin');
    process.exit(1);
}

// CoinGecko API endpoint
const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(coin)}&vs_currencies=usd`;

console.log(`🔍 Fetching ${coin} price from CoinGecko...`);

// Make API request with timeout
const req = https.get(apiUrl, (res) => {
    let data = '';

    if (res.statusCode !== 200) {
        console.log('❌ API error (Status: ' + res.statusCode + '). Please try again later.');
        process.exit(1);
    }

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        try {
            const parsedData = JSON.parse(data);
            
            if (parsedData[coin] && parsedData[coin].usd !== undefined) {
                const price = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }).format(parsedData[coin].usd);
                
                const coinName = coin.toUpperCase();
                console.log('✨' + '='.repeat(40));
                console.log(`💰 ${coinName} PRICE: ${price}`);
                console.log('✨' + '='.repeat(40));
            } else {
                console.log('❌ Coin "' + coin + '" not found!');
                console.log('💡 Try these popular coins:');
                console.log('   - bitcoin');
                console.log('   - ethereum');
                console.log('   - dogecoin');
                console.log('   - cardano');
                console.log('   - solana');
                console.log('   - ripple');
                console.log('   - litecoin');
            }
        } catch (error) {
            console.log('❌ Error parsing API response. Please try again.');
        }
    });
});

req.on('error', (error) => {
    console.log('❌ Network error. Please check your internet connection.');
});

req.setTimeout(10000, () => {
    console.log('❌ Request timeout. Please try again.');
    req.destroy();
});

req.end();
