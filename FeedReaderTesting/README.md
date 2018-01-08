# Project: Feed Reader Testing

In this project I am given a web-based application that reads RSS feeds. The application has an incomplete test suite. I will complete and test the suite using jasmine as a behavior-driven development framework.

## Project Goals

#### **1. All Required Tests Provided**

- The required tests for the project (`RSS Feed` testing, `RSS Feed` properties, menu default state, and menu hiding/showing) are all provided and are comprehensive enough to adequately test the functionality.

- Tests should be independent of one another.

#### **2. Passing**

- All required tests for the project pass.

## Project Details

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Review the functionality of the application within your browser.
4. Explore the application's HTML *`./index.html`*, CSS *`./css/style.css`* and JavaScript *`./js/app.js`* to gain an understanding of how it works.
5. Explore the Jasmine spec file *`./jasmine/spec/feedreader.js`* and review the [Jasmine documentation](http://jasmine.github.io).
6. Edit the `allFeeds` variable in *`./js/app.js`* to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the `allFeeds` variable to a passing state.
8. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named `"The menu"`.
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named `"Initial Entries"`.
14. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. Write a test suite named `"New Feed Selection"`.
16. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. No test should be dependent on the results of another.
18. Callbacks should be used to ensure that feeds are loaded before they are tested.
19. Implement error handling for undefined variables and out-of-bound array access.
20. When complete - all of your tests should pass.
21. Write a README file detailing all steps required to successfully run the application.

## How to Run the Application

#### 1. You can download or clone the repository from [here](https://github.com/leachung41/FeedReaderTesting).
#### 2. Find a *index.html* file in the repository, and open the *index.html* file in a browser.
#### 3. You can see the result of jasmine on the bottom of the page.

- Main page: *`./index.html`*
- source file: *`./js/app.js`*
- spec file: *`./jasmine/spec/feedreader.js`*

## References

- [Udacity : JavaScript Testing course](https://www.udacity.com/course/javascript-testing--ud549)
- [Jasmine documentation](https://jasmine.github.io/)
- [Jasmine : github](https://github.com/jasmine/jasmine)
- [Tutorials point : JasmineJS](https://www.tutorialspoint.com/jasminejs/index.htm)
- [How To Do In Java : Jasmine JavaScript Unit Testing Tutorial with Examples](https://howtodoinjava.com/scripting/javascript/jasmine-javascript-unit-testing-tutorial/)
- [ENVATO TUTS+ : Testing Your JavaScript With Jasmine](https://code.tutsplus.com/tutorials/testing-your-javascript-with-jasmine--net-21229)
- [Udacity Frontend Nanodegree Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
