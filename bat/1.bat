@REM 打开cmd 新建文本
set n=0
:start 
set /a n+=1
start "new cmd" cmd
start notepad
if %n%==2 exit
goto start
