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

## Helpful links used

### Creating d3 donut pie chart with React
- [D3 basic donut reference code](https://www.d3-graph-gallery.com/graph/donut_basic.html)
- [Setting up React app with D3 v6 or v7, using refs](https://www.pluralsight.com/guides/using-d3.js-inside-a-react-app)
- [Medium article - create pie chart with d3 and react hooks](https://medium.com/stationfive/how-to-create-a-pie-chart-with-d3-js-and-react-hooks-part-1-81bcd7f39b32)
- [Code sandbox d3 pie graph with hooks](https://codesandbox.io/s/r5wp0v08xq?from-embed)
- [Codepen D3 circle meter example](https://codepen.io/herudea/pen/YpEeRW)
