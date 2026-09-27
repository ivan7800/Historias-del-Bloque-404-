@echo off
setlocal
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 (
  start "" /b cmd /c "timeout /t 1 /nobreak >nul & start http://127.0.0.1:8765"
  py -3 -m http.server 8765 --bind 127.0.0.1
  goto :end
)
where python >nul 2>nul
if %errorlevel%==0 (
  start "" /b cmd /c "timeout /t 1 /nobreak >nul & start http://127.0.0.1:8765"
  python -m http.server 8765 --bind 127.0.0.1
  goto :end
)
echo No se encuentra Python. Instala Python 3 o abre index.html directamente para jugar sin modo PWA.
pause
:end
endlocal
