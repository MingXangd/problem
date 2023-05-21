@REM 重定向符号>将其写入目标文件中
@echo off
set source_file=a.txt
set dest_file=b.txt
type %source_file% > %dest_file%