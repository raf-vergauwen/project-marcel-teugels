# NPM Problem

## Phase 1: Initial Log

```log
C:\Users\Verga\OneDrive\Github-Projects\Project-Marcel-Teugels>npm install
npm ERR! code 1
npm ERR! path C:\Users\Verga\OneDrive\Github-Projects\Project-Marcel-Teugels\node_modules\fibers
npm ERR! command failed
npm ERR! command C:\Windows\system32\cmd.exe /d /s /c node build.js || nodejs build.js
npm ERR! gyp info it worked if it ends with ok
npm ERR! gyp info using node-gyp@7.1.2
npm ERR! gyp info using node@15.14.0 | win32 | x64
npm ERR! gyp ERR! find Python
npm ERR! gyp ERR! find Python Python is not set from command line or npm configuration
npm ERR! gyp ERR! find Python Python is not set from environment variable PYTHON
npm ERR! gyp ERR! find Python checking if "python3" can be used
npm ERR! gyp ERR! find Python - "python3" is not in PATH or produced an error
npm ERR! gyp ERR! find Python checking if "python" can be used
npm ERR! gyp ERR! find Python - "python" is not in PATH or produced an error
npm ERR! gyp ERR! find Python checking if "python2" can be used
npm ERR! gyp ERR! find Python - "python2" is not in PATH or produced an error
npm ERR! gyp ERR! find Python checking if Python is C:\Python37\python.exe
npm ERR! gyp ERR! find Python - "C:\Python37\python.exe" could not be run
npm ERR! gyp ERR! find Python checking if Python is C:\Python27\python.exe
npm ERR! gyp ERR! find Python - "C:\Python27\python.exe" could not be run
npm ERR! gyp ERR! find Python checking if the py launcher can be used to find Python
npm ERR! gyp ERR! find Python - "py.exe" is not in PATH or produced an error
npm ERR! gyp ERR! find Python
npm ERR! gyp ERR! find Python **********************************************************
npm ERR! gyp ERR! find Python You need to install the latest version of Python.
npm ERR! gyp ERR! find Python Node-gyp should be able to find and use Python. If not,
npm ERR! gyp ERR! find Python you can try one of the following options:
npm ERR! gyp ERR! find Python - Use the switch --python="C:\Path\To\python.exe"
npm ERR! gyp ERR! find Python   (accepted by both node-gyp and npm)
npm ERR! gyp ERR! find Python - Set the environment variable PYTHON
npm ERR! gyp ERR! find Python - Set the npm configuration variable python:
npm ERR! gyp ERR! find Python   npm config set python "C:\Path\To\python.exe"
npm ERR! gyp ERR! find Python For more information consult the documentation at:
npm ERR! gyp ERR! find Python https://github.com/nodejs/node-gyp#installation
npm ERR! gyp ERR! find Python **********************************************************
npm ERR! gyp ERR! find Python
npm ERR! gyp ERR! configure error
npm ERR! gyp ERR! stack Error: Could not find any Python installation to use
npm ERR! gyp ERR! stack     at PythonFinder.fail (C:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\find-python.js:302:47)
npm ERR! gyp ERR! stack     at PythonFinder.runChecks (C:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\find-python.js:136:21)
npm ERR! gyp ERR! stack     at PythonFinder.<anonymous> (C:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\find-python.js:200:18)
npm ERR! gyp ERR! stack     at PythonFinder.execFileCallback (C:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\find-python.js:266:16)
npm ERR! gyp ERR! stack     at exithandler (node:child_process:333:5)
npm ERR! gyp ERR! stack     at ChildProcess.errorhandler (node:child_process:345:5)
npm ERR! gyp ERR! stack     at ChildProcess.emit (node:events:369:20)
npm ERR! gyp ERR! stack     at Process.ChildProcess._handle.onexit (node:internal/child_process:288:12)
npm ERR! gyp ERR! stack     at onErrorNT (node:internal/child_process:480:16)
npm ERR! gyp ERR! stack     at processTicksAndRejections (node:internal/process/task_queues:81:21)
npm ERR! gyp ERR! System Windows_NT 10.0.19042
npm ERR! gyp ERR! command "C:\\Program Files\\nodejs\\node.exe" "C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js" "rebuild" "--release"
npm ERR! gyp ERR! cwd C:\Users\Verga\OneDrive\Github-Projects\Project-Marcel-Teugels\node_modules\fibers
npm ERR! gyp ERR! node -v v15.14.0
npm ERR! gyp ERR! node-gyp -v v7.1.2
npm ERR! gyp ERR! not ok
npm ERR! node-gyp exited with code: 1
npm ERR! Please make sure you are using a supported platform and node version. If you
npm ERR! would like to compile fibers on this machine please make sure you have setup your
npm ERR! build environment--
npm ERR! Windows + OS X instructions here: https://github.com/nodejs/node-gyp
npm ERR! Ubuntu users please run: `sudo apt-get install g++ build-essential`
npm ERR! RHEL users please run: `yum install gcc-c++` and `yum groupinstall 'Development Tools'`
npm ERR! Alpine users please run: `sudo apk add python make g++`
npm ERR! 'nodejs' is not recognized as an internal or external command,
npm ERR! operable program or batch file.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Verga\AppData\Local\npm-cache\_logs\2021-04-18T21_09_38_120Z-debug.log

C:\Users\Verga\OneDrive\Github-Projects\Project-Marcel-Teugels>
```

## Phase 2: "npm install -g node-gyp"

```log
npm ERR! code 1
npm ERR! path C:\Users\Verga\OneDrive\Github-Projects\Project-Marcel-Teugels\node_modules\fibers
npm ERR! command failed
npm ERR! command C:\Windows\system32\cmd.exe /d /s /c node build.js || nodejs build.js
npm ERR! gyp info it worked if it ends with ok
npm ERR! gyp info using node-gyp@7.1.2
npm ERR! gyp info using node@15.14.0 | win32 | x64
npm ERR! gyp ERR! find Python
npm ERR! gyp ERR! find Python Python is not set from command line or npm configuration
npm ERR! gyp ERR! find Python Python is not set from environment variable PYTHON
npm ERR! gyp ERR! find Python checking if "python3" can be used
npm ERR! gyp ERR! find Python - "python3" is not in PATH or produced an error
npm ERR! gyp ERR! find Python checking if "python" can be used
npm ERR! gyp ERR! find Python - "python" is not in PATH or produced an error
npm ERR! gyp ERR! find Python checking if "python2" can be used
npm ERR! gyp ERR! find Python - "python2" is not in PATH or produced an error
npm ERR! gyp ERR! find Python checking if Python is C:\Python37\python.exe
npm ERR! gyp ERR! find Python - "C:\Python37\python.exe" could not be run
npm ERR! gyp ERR! find Python checking if Python is C:\Python27\python.exe
npm ERR! gyp ERR! find Python - "C:\Python27\python.exe" could not be run
npm ERR! gyp ERR! find Python checking if the py launcher can be used to find Python
npm ERR! gyp ERR! find Python - "py.exe" is not in PATH or produced an error
npm ERR! gyp ERR! find Python
npm ERR! gyp ERR! find Python **********************************************************
npm ERR! gyp ERR! find Python You need to install the latest version of Python.
npm ERR! gyp ERR! find Python Node-gyp should be able to find and use Python. If not,
npm ERR! gyp ERR! find Python you can try one of the following options:
npm ERR! gyp ERR! find Python - Use the switch --python="C:\Path\To\python.exe"
npm ERR! gyp ERR! find Python   (accepted by both node-gyp and npm)
npm ERR! gyp ERR! find Python - Set the environment variable PYTHON
npm ERR! gyp ERR! find Python - Set the npm configuration variable python:
npm ERR! gyp ERR! find Python   npm config set python "C:\Path\To\python.exe"
npm ERR! gyp ERR! find Python For more information consult the documentation at:
npm ERR! gyp ERR! find Python https://github.com/nodejs/node-gyp#installation
npm ERR! gyp ERR! find Python **********************************************************
npm ERR! gyp ERR! find Python
npm ERR! gyp ERR! configure error
npm ERR! gyp ERR! stack Error: Could not find any Python installation to use
npm ERR! gyp ERR! stack     at PythonFinder.fail (C:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\find-python.js:302:47)   
npm ERR! gyp ERR! stack     at PythonFinder.runChecks (C:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\find-python.js:136:21)
npm ERR! gyp ERR! stack     at PythonFinder.<anonymous> (C:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\find-python.js:200:18)
npm ERR! gyp ERR! stack     at PythonFinder.execFileCallback (C:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\find-python.js:266:16)
npm ERR! gyp ERR! stack     at exithandler (node:child_process:333:5)
npm ERR! gyp ERR! stack     at ChildProcess.errorhandler (node:child_process:345:5)
npm ERR! gyp ERR! stack     at ChildProcess.emit (node:events:369:20)
npm ERR! gyp ERR! stack     at Process.ChildProcess._handle.onexit (node:internal/child_process:288:12)
npm ERR! gyp ERR! stack     at onErrorNT (node:internal/child_process:480:16)
npm ERR! gyp ERR! stack     at processTicksAndRejections (node:internal/process/task_queues:81:21)
npm ERR! gyp ERR! System Windows_NT 10.0.19042
npm ERR! gyp ERR! command "C:\\Program Files\\nodejs\\node.exe" "C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js" "rebuild" "--release"de-gyp.js" "rebuild" "--release"
npm ERR! gyp ERR! cwd C:\Users\Verga\OneDrive\Github-Projects\Project-Marcel-Teugels\node_modules\fibers
npm ERR! gyp ERR! node -v v15.14.0
npm ERR! gyp ERR! node-gyp -v v7.1.2
npm ERR! gyp ERR! not ok
npm ERR! node-gyp exited with code: 1
npm ERR! Please make sure you are using a supported platform and node version. If you
npm ERR! would like to compile fibers on this machine please make sure you have setup your
npm ERR! build environment--
npm ERR! Windows + OS X instructions here: https://github.com/nodejs/node-gyp
npm ERR! Ubuntu users please run: `sudo apt-get install g++ build-essential`
npm ERR! RHEL users please run: `yum install gcc-c++` and `yum groupinstall 'Development Tools'`
npm ERR! Alpine users please run: `sudo apk add python make g++`
npm ERR! 'nodejs' is not recognized as an internal or external command,
npm ERR! operable program or batch file.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Verga\AppData\Local\npm-cache\_logs\2021-04-18T21_27_41_903Z-debug.log
```

## Phase 3: "Installed all 3 versions of Phyton and Visual Studio Code"

```log
npm ERR! code 1
npm ERR! path C:\Users\Verga\OneDrive\Github-Projects\Project-Marcel-Teugels\node_modules\fibers
npm ERR! command failed
npm ERR! command C:\Windows\system32\cmd.exe /d /s /c node build.js || nodejs build.js
npm ERR! gyp info it worked if it ends with ok
npm ERR! gyp info using node-gyp@7.1.2
npm ERR! gyp info using node@15.14.0 | win32 | x64
npm ERR! gyp info find Python using Python version 2.7.18 found at "C:\Python27\python.exe"
npm ERR! gyp ERR! find VS 
npm ERR! gyp ERR! find VS msvs_version was set from command line or npm config
npm ERR! gyp ERR! find VS - looking for Visual Studio version 2017
npm ERR! gyp ERR! find VS VCINSTALLDIR not set, not running in VS Command Prompt
npm ERR! gyp ERR! find VS checking VS2019 (16.9.31205.134) found at:
npm ERR! gyp ERR! find VS "C:\Program Files (x86)\Microsoft Visual Studio\2019\Community"
npm ERR! gyp ERR! find VS - found "Visual Studio C++ core features"
npm ERR! gyp ERR! find VS - found VC++ toolset: v142
npm ERR! gyp ERR! find VS - found Windows SDK: 10.0.19041.0
npm ERR! gyp ERR! find VS - msvs_version does not match this version
npm ERR! gyp ERR! find VS could not find a version of Visual Studio 2017 or newer to use
npm ERR! gyp ERR! find VS looking for Visual Studio 2015
npm ERR! gyp ERR! find VS - not found
npm ERR! gyp ERR! find VS not looking for VS2013 as it is only supported up to Node.js 8
npm ERR! gyp ERR! find VS
npm ERR! gyp ERR! find VS valid versions for msvs_version:
npm ERR! gyp ERR! find VS - "2019"
npm ERR! gyp ERR! find VS - "C:\Program Files (x86)\Microsoft Visual Studio\2019\Community"
npm ERR! gyp ERR! find VS
npm ERR! gyp ERR! find VS **************************************************************
npm ERR! gyp ERR! find VS You need to install the latest version of Visual Studio
npm ERR! gyp ERR! find VS including the "Desktop development with C++" workload.
npm ERR! gyp ERR! find VS For more information consult the documentation at:
npm ERR! gyp ERR! find VS https://github.com/nodejs/node-gyp#on-windows
npm ERR! gyp ERR! find VS **************************************************************
npm ERR! gyp ERR! find VS
npm ERR! gyp ERR! configure error
npm ERR! gyp ERR! stack Error: Could not find any Visual Studio installation to use
npm ERR! gyp ERR! stack     at VisualStudioFinder.fail (C:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\find-visualstudio.js:121:47)
npm ERR! gyp ERR! stack     at C:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\find-visualstudio.js:74:16
npm ERR! gyp ERR! stack     at VisualStudioFinder.findVisualStudio2013 (C:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\find-visualstudio.js:351:14)
npm ERR! gyp ERR! stack     at C:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\find-visualstudio.js:70:14
npm ERR! gyp ERR! stack     at C:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\find-visualstudio.js:372:16
npm ERR! gyp ERR! stack     at C:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\util.js:54:7
npm ERR! gyp ERR! stack     at C:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\util.js:33:16
npm ERR! gyp ERR! stack     at ChildProcess.exithandler (node:child_process:333:5)
npm ERR! gyp ERR! stack     at ChildProcess.emit (node:events:369:20)
npm ERR! gyp ERR! stack     at maybeClose (node:internal/child_process:1067:16)
npm ERR! gyp ERR! System Windows_NT 10.0.19042
npm ERR! gyp ERR! command "C:\\Program Files\\nodejs\\node.exe" "C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js" "rebuild" "--release"
npm ERR! gyp ERR! cwd C:\Users\Verga\OneDrive\Github-Projects\Project-Marcel-Teugels\node_modules\fibers
npm ERR! gyp ERR! node -v v15.14.0
npm ERR! gyp ERR! node-gyp -v v7.1.2
npm ERR! gyp ERR! not ok
npm ERR! node-gyp exited with code: 1
npm ERR! Please make sure you are using a supported platform and node version. If you
npm ERR! would like to compile fibers on this machine please make sure you have setup your
npm ERR! build environment--
npm ERR! Windows + OS X instructions here: https://github.com/nodejs/node-gyp
npm ERR! Ubuntu users please run: `sudo apt-get install g++ build-essential`
npm ERR! RHEL users please run: `yum install gcc-c++` and `yum groupinstall 'Development Tools'`
npm ERR! Alpine users please run: `sudo apk add python make g++`
npm ERR! 'nodejs' is not recognized as an internal or external command,
npm ERR! operable program or batch file.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Verga\AppData\Local\npm-cache\_logs\2021-04-19T09_55_26_805Z-debug.log
```
