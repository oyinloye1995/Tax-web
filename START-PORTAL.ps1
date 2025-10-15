# Citizen Rewards Portal Startup Script
Write-Host "🎁 STARTING CITIZEN REWARDS PORTAL..." -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Blue

# Start Vite server in background
Write-Host "[1/2] Starting development server..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-Command", "cd 'C:\Users\Mo\Tax web'; npm run dev -- --host" -WindowStyle Minimized

# Wait for server to start
Start-Sleep -Seconds 8

# Start localtunnel with simple random URL (no password)
Write-Host "[2/2] Creating public tunnel..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-Command", "cd 'C:\Users\Mo\Tax web'; lt --port 5173" -WindowStyle Normal

Write-Host ""
Write-Host "🚀 CITIZEN REWARDS PORTAL IS STARTING..." -ForegroundColor Green
Write-Host ""
Write-Host "📋 YOUR LINKS:" -ForegroundColor Cyan
Write-Host "   Local:  http://localhost:5173/" -ForegroundColor White
Write-Host "   Public: Check the tunnel window for the random URL" -ForegroundColor White
Write-Host ""
Write-Host "📧 Email Setup:" -ForegroundColor Cyan
Write-Host "   All signups → jc4479697@gmail.com" -ForegroundColor White
Write-Host ""
Write-Host "⚡ The public URL will change each time (no password needed)" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press any key to close this window..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")