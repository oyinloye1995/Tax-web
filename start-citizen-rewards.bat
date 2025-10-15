@echo off
echo Starting Citizen Rewards Portal...
echo.

REM Start the Vite development server
echo [1/3] Starting Vite server...
start /B npm run dev -- --host

REM Wait for server to start
timeout /t 5 /nobreak >nul

REM Start Cloudflare tunnel with a named subdomain
echo [2/3] Creating public tunnel...
start /B cloudflared tunnel --url http://localhost:5173

REM Wait for tunnel to establish
timeout /t 10 /nobreak >nul

echo [3/3] Your Citizen Rewards Portal is ready!
echo.
echo ============================================
echo   CITIZEN REWARDS PORTAL - READY TO USE
echo ============================================
echo.
echo Local URL:  http://localhost:5173/
echo Public URL: Check the Cloudflare terminal for the URL
echo.
echo Email notifications will be sent to: jc4479697@gmail.com
echo.
echo Press any key to stop all services...
pause >nul

REM Stop all services
echo.
echo Stopping services...
taskkill /f /im node.exe >nul 2>&1
taskkill /f /im cloudflared.exe >nul 2>&1
echo All services stopped.
pause