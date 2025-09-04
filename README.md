crypto-price.js 📊💰
A simple and user-friendly Node.js CLI tool that fetches live cryptocurrency prices using the CoinGecko API. Perfect for Windows users with PowerShell support and an easy-to-use batch file for beginners.

https://img.shields.io/badge/Node.js-14+-green
https://img.shields.io/badge/License-MIT-blue
https://img.shields.io/badge/CLI-Tool-orange
https://img.shields.io/badge/Windows-Compatible-success

🚀 Features
✅ Real-time Prices: Fetch live crypto prices from CoinGecko API

✅ Beautiful Formatting: Clean, emoji-enhanced output with proper currency formatting

✅ Error Handling: User-friendly error messages for invalid coins and network issues

✅ Windows Optimized: Full PowerShell support with dedicated batch file

✅ Beginner Friendly: Double-click batch file for easy execution

✅ Zero Dependencies: Lightweight with no external packages required

✅ Multi-Coin Support: Supports all cryptocurrencies available on CoinGecko

📦 Installation
Prerequisites
Node.js (Download from: https://nodejs.org/)

Windows PowerShell (comes pre-installed on Windows)

Quick Setup
Download the files from GitHub Releases

Extract the ZIP to a folder of your choice

Open the folder in File Explorer

Files Included
crypto-price.js - Main Node.js script

crypto-price.bat - Windows batch file (easy double-click option)

package.json - Project configuration

README.md - This documentation

🎯 Usage
Method 1: Using the Batch File (Recommended for Beginners)
powershell
# Double-click crypto-price.bat or run in PowerShell:
.\crypto-price.bat bitcoin
.\crypto-price.bat ethereum
.\crypto-price.bat dogecoin
.\crypto-price.bat solana

# Or without parameters (defaults to Bitcoin)
.\crypto-price.bat
Method 2: Using Node.js Directly
powershell
node crypto-price.js bitcoin
node crypto-price.js ethereum
node crypto-price.js cardano
node crypto-price.js ripple

# Default to Bitcoin if no coin specified
node crypto-price.js
Method 3: Double-Click Simplicity
Just double-click crypto-price.bat in File Explorer - it will run with default Bitcoin price check!

🛡️ PowerShell Security Note
Windows PowerShell requires .\ before script names for security reasons. This is normal behavior!

powershell
# ✅ THIS WORKS (with .\)
.\crypto-price.bat bitcoin

# ✅ THIS WORKS (Node.js direct)
node crypto-price.js ethereum

# ❌ THIS WON'T WORK (missing .\)
crypto-price.bat bitcoin
📊 Example Outputs
Successful Price Fetch:
powershell
PS C:\crypto-price> .\crypto-price.bat bitcoin

================================
   CRYPTO PRICE CHECKER
================================

✅ Node.js is installed
🔍 Checking crypto prices...
📊 Fetching bitcoin price...

🔍 Fetching bitcoin price...
💰 BITCOIN price: $111,751.00

Press any key to continue . . .
Ethereum Price:
powershell
PS C:\crypto-price> node crypto-price.js ethereum
🔍 Fetching ethereum price...
💰 ETHEREUM price: $4,451.06
Invalid Coin Error:
powershell
PS C:\crypto-price> .\crypto-price.bat invalidcoin
❌ Coin not found. Try: bitcoin, ethereum, dogecoin...
🪙 Supported Cryptocurrencies
All coins from CoinGecko API are supported! Popular examples:

Coin ID	Symbol	Name
bitcoin	BTC	Bitcoin
ethereum	ETH	Ethereum
dogecoin	DOGE	Dogecoin
cardano	ADA	Cardano
solana	SOL	Solana
ripple	XRP	Ripple
litecoin	LTC	Litecoin
polkadot	DOT	Polkadot
🔧 Troubleshooting
❌ "Node.js is not installed"
Download and install Node.js from https://nodejs.org/

Restart your computer after installation

❌ "File cannot be loaded because running scripts is disabled"
This is normal PowerShell security

Use .\crypto-price.bat bitcoin instead of crypto-price.bat bitcoin

Or double-click the batch file in File Explorer

❌ "Network error"
Check your internet connection

Try again in a few minutes

❌ "Coin not found"
Use the exact coin ID (e.g., "bitcoin" not "BTC")

Check the supported coins list above

🛠️ Technical Details
API: CoinGecko API (free tier)

Runtime: Node.js native HTTPS module

Encoding: UTF-8 for emoji support

Compatibility: Windows 10/11, PowerShell 5.1+

📝 License
MIT License - feel free to use, modify, and distribute! See LICENSE file for details.

🤝 Contributing
This is an open-source project. Contributions are welcome! Feel free to:

Report issues

Suggest new features

Submit pull requests

Improve documentation

🚀 Future Enhancements
Support for multiple coins in one command

Price change percentage (24h, 7d)

Different currency support (EUR, GBP, etc.)

Historical price data

Price alerts and notifications

💻 Development
powershell
# Clone the repository
git clone https://github.com/dzee-code/crypto-price.git
cd crypto-price

# Test different coins
node crypto-price.js bitcoin
node crypto-price.js ethereum
node crypto-price.js dogecoin

# Test error handling
node crypto-price.js invalidcoin
📞 Support
If you have any questions or issues:

Check the troubleshooting section above

Open an issue on GitHub

Ensure you're using the latest version

