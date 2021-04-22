@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\react-dev-utils\node_modules\which\bin\node-which" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\react-dev-utils\node_modules\which\bin\node-which" %*
)