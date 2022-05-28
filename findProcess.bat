@Echo Off
SetLocal EnableExtensions

Set ProcessName=%1
TaskList /FI "ImageName EQ %ProcessName%" | Find /I "%ProcessName%"
cls
echo %ErrorLevel%