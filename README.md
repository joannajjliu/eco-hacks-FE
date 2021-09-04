# Testing locally on browser (Not the extension, see below for testing extension)

npm run start-mock (no mock available atm)

# Build

npm run build

# Enable chrome extension to work on local

open chrome and go to URL 'chrome://extensions/'
select 'load unpacked' and select the build folder of this project
after this initial setup you only have to update the extension after rebuilding the project

# Overview

script.js is injected into Chrome on startup, this will send product model number to the extension to be used
