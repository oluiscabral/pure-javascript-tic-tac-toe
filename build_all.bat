@ECHO OFF
CALL npm install
CLS
ECHO Compiling source files...
CALL tsc --build
PAUSE
