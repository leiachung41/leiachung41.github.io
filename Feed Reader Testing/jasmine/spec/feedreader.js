/* feedreader.js

This is the spec file that Jasmine will read and contains all of the tests
that will be run against your application. */

/* We're placing all of our tests within the $() function,
since some of these tests may require DOM elements.
We want to ensure they don't run until the DOM is ready.*/

$(function() {
  /* This is our first test suite - a test suite just contains a related set of tests.
  This suite is all about the RSS feeds definitions, the allFeeds variable in our application. */

  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that 
    the allFeeds variablehas been defined and that it is not empty.
    Experiment with this before you get started on the rest of this project.
    What happens when you change allFeeds in app.js to be an empty array and refresh the page? */

    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* Write a test that loops through each feed in the allFeeds object and
    ensures it has a URL defined and that the URL is not empty. */

    it('have a URL defined and not empty', function() {
      // A loop for allFeeds object have a URL defined and not empty.
      for (i=0; i<allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeDefined();

        // Use the length for identifying the URL is empty or not.
        expect(allFeeds[i].url.length).not.toBe(0);
      }
    });


    /* Write a test that loops through each feed in the allFeeds object and
    ensures it has a name defined and that the name is not empty. */

    it('have a name defined and not empty', function() {
      // A loop for allFeeds object have a name defined and not empty.
      for (i=0; i<allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined();

        // Use the length for identifying the name is empty or not.
        expect(allFeeds[i].name.length).not.toBe(0);
      }
    });

  });


  /* Write a new test suite named "The menu" */
  describe('The menu', function() {

    /* Write a test that ensures the menu element is hidden by default.
    You'll have to analyze the HTML and  the CSS to determine
    how we're performing the hiding/showing of the menu element. */

    it('is hidden by default', function() {
      // The menu is hidden by class 'menu-hidden'.
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    /* Write a test that ensures the menu changes visibility when the menu icon is clicked.
    This test should have two expectations:
    does the menu display when clicked and does it hide when clicked again. */

    it('changes visibility when the menu icon is clicked', function() {
      // The menu is changed by class 'menu-icon-link'.
      $('.menu-icon-link').click();

      // The menu is cliked it displays.
      expect($('body').hasClass('menu-hidden')).toEqual(false);


      $('.menu-icon-link').click();

      // The menu is clicked again it hides.
      expect($('body').hasClass('menu-hidden')).toEqual(true);
    });

  });

  /* Write a new test suite named "Initial Entries" */
  describe('Initial Entries', function() {

    /* Write a test that ensures when the loadFeed function is called and
    completes its work, there is at least a single .entry element within the .feed container.
    Remember, loadFeed() is asynchronous so this test will require
    the use of Jasmine's beforeEach and asynchronous done() function. */

    // Use beforeEach and done() for testing loadFeed().
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    it('have at least a single .entry element within the .feed container', function() {
      // Declare a variable for class entry.
      var entryClass = $('.feed .entry');

      // Use the length for identifying the loadFeed() has
      // at least a single .entry element within the .feed container entry or not.
      expect(entryClass.length).not.toBe(0);
    });

  });

  /* Write a new test suite named "New Feed Selection" */
  describe('New Feed Selection', function() {

    /* Write a test that ensures when a new feed is loaded by the loadFeed function
    that the content actually changes. Remember, loadFeed() is asynchronous. */

    // Declare two variables for testing a new feed.
    var feedBefore;
    var feedAfter;

    // Use beforeEach and done() for testing a new feed.
    beforeEach(function(done) {
      loadFeed(0, function() {
        // Identify feedBefore has the content.
        feedBefore = $('.feed').html();
        done();
      });
    });

    it('changes feed the content when a new feed is loaded', function(done) {
      loadFeed(1, function() {
        // Identify feedAfter has the content.
        feedAfter = $('.feed').html();

        // Compare feedAfter and feedBefore to identify they have same content or not.
        expect(feedAfter).not.toEqual(feedBefore);
        done();
      });
    });

  });

}());
