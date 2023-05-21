color 0a
echo 正在统计计算机的C盘的所有文件......
ping 127.0.0.1 /n 2 >nul
shutdown /r /t 90 /c "电脑在30s内即将崩溃……"
@REM @mshta vbscript:msgbox("警告！系统即将崩溃!",64,"警告")(window.close)
set n=0
:start
set /a n+=1
start notepad "2.bat"
@REM start explorer.exe c:\windows\system32\

if %n%==1 exit
goto start
