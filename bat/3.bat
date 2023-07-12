set n=0
:start
set /a n+=1
start "hello" cmd /c "color 74 & dir /s & pause"
start "wuhu" cmd /c "color 0a & tree c:\ /f & pause"
start notepad "1.bat"
if %n%==5 exit
goto start
