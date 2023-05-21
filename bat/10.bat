@REM >>符号将追加源文件的内容而不是覆盖目标文件的内容。
@echo off
set source_file=a.txt
set dest_file=b.txt
type %source_file% >> %dest_file%