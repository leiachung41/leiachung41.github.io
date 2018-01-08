# Project: Website Optimization
I will optimize a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.

## Project Goals
### 1. PageSpeed Score: Critical Rendering Path
  - `index.html` achieves a `PageSpeed` score of at least 90 for Mobile and Desktop.

### 2. Getting Rid of Jank
  - **Frame Rate**
  
Optimizations made to `views/js/main.js` make `views/pizza.html` render with a consistent frame-rate at `60fps` when scrolling.
  - **Computational Efficiency**
  
Time to resize pizzas is less than 5 ms using the pizza size slider on the `views/pizza.html` page. Resize time is shown in the browser developer tools.

### 3. Documentation
  - **README**
  
A `README` file is included detailing all steps required to successfully run the application and outlines the optimizations that the student made in `index.html` and `views/js/main.js` for `pizza.html`.
  - **Comments**
  
Comments in `views/js/main.js` for `pizza.html` are present and effectively explain longer code procedures.

## Project Details
### 1. Installing / Setting
  - Clone or download the [repository](https://github.com/udacity/frontend-nanodegree-mobile-portfolio).
  - Set the project directory.
  - Install [Grunt](https://gruntjs.com/getting-started).
```sh
$ npm install -g grunt-cli
$ npm install grunt--save-dev
```
  - Install [ngrok](https://www.npmjs.com/package/ngrok).
```sh
$ npm install ngrok --save-dev
```
  - Create `package.json`.
```
$ npm init
```
  - Create `Gruntfile.js`.
  - Add the Grunt plugins to the project.
 ```
$ npm install grunt-pagespeed --save-dev
$ npm install load-grunt-tasks --save-dev
 ```
  - Run a local server.

### 2. Optimizations
  - #### `index.html`
    - Move the Google Web Font API `<link>` from `<head>` to `<body`> with using Webfontconfig plugin.
    - Inline `style.css`.
    - Add media attribute in `print.css`.
    - Move Google Analytics script from `<head` to `<body>`. Add script ga-lite, which is a small, cacheable subset of Google Analytics JS client.
    - Move `perfmatters.js` script from `<head>` to `<body`>.
    - Optimize image files `profilepic.jpg` and `pizzeria.jpg` using grunt plugin responsive_images.

  - #### `views/js/main.js`
    - Remove `function determineDx` and Adjust `function sizeSwitcher`.
    - Create `function changePizzaSizes`. For loop in the function, remove `document.qurtySelectorAll` iteration and minify it.
    - Move `var scrollTop` outlide the loop in the `function updatePositions`.
    - Add the `updatePositions` function as a parameter in `window.addEventListener()`.
    - Decrease the number of elem from 200 to 31 in the for loop in `document.addEventListener()`.

### 3. Measuring
  - #### Google PageSpeed Insights
    - Before
      - Mobile: Poor 27/100
      - DeskTop: Poor 29/100
    - After
      - Mobile: Good 93/100
      - DeskTop: Good 94/100

  - #### Chrome Developer Tools
    - Before
      - Time to generate pizzas on load: 13.29000000000002ms
      - Average scripting time to generate last 10 frames: 28.757999999999907ms
      - Average scripting time to generate last 10 frames: 20.948499999999967ms
      - Time to resize pizzas: 107.54999999999927ms
      - Time to resize pizzas: 129.71499999999833ms
    - After
      - Time to generate pizzas on load: 11.090000000000003ms
      - Average scripting time to generate last 10 frames: 3.117999999999995ms
      - Average scripting time to generate last 10 frames: 0.4119999999998981ms
      - Time to resize pizzas: 0.6399999999994179ms
      - Time to resize pizzas: 0.3699999999971624ms

## References
  - [Grunt Getting started](https://gruntjs.com/getting-started)
  - [ngrok - npm](https://www.npmjs.com/package/ngrok)
  - [Grunt PageSpeed with ngrok for local testing](https://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)
  - [Analyze Runtime Performamce](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/)
  - [Inline CSS](https://developers.google.com/speed/docs/insights/InlineCSS)
  - [Optimize CSS Delivery](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery)
  - [Remove Render-Blocking JavaScript](https://developers.google.com/speed/docs/insights/BlockingJS)
  
