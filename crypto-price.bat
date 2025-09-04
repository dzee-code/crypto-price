@echo off
chcp 65001 >nul
echo.
echo ================================
echo    CRYPTO PRICE CHECKER
echo ================================
echo.

node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ ERROR: Node.js is not installed!
    echo.
    echo 📥 Please download and install Node.js from:
    echo    https://nodejs.org/
    echo.
    echo 🚀 After installation, run this script again.
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js is installed
echo 🔍 Checking crypto prices...

set coin=%~1
if "%coin%"=="" (
    echo ℹ️  No coin specified, using default: bitcoin
    set coin=bitcoin
)

echo 📊 Fetching %coin% price...
echo.

node crypto-price.js %coin%
echo.
pause
