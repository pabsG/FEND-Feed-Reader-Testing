$(function() {

    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds', function() {

        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('are defined, have a URL and function', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);

            /* This test loops through each feed using a for loop and
             * makes sure that all feed urls and names are defined and not empty.
             */

            allFeeds.forEach(function(feed){
              expect(feed.url).toBeDefined();
              expect(feed.url).not.toBe(" ");
              expect(feed.name).toBeDefined();
              expect(feed.name).not.toBe(" ");
            });
        });
      });

    /* Menu test suite */

    describe('The menu', function() {

      /* this variable is declared at this level because our two
       * tests need to access it.
       */

       const body = document.querySelector('body');

      /* This test makes sure that the menu element is hidden by default.
       * It does this by using the class name 'menu-hidden' which is how the
       * css file hides the element.
       */

       it('is hidden', function() {
         expect(body.classList.contains('menu-hidden')).toBe(true);
       });

       /* this test makes sure the menu is displayed when the hamburger icon
        * is clicked, the check makes sure the menu is hidden upon another
        * click.
        */

        it('shows up and hides on click', function() {
          const hamburger = document.querySelector('.menu-icon-link');
          hamburger.click();
          expect(body.classList.contains('menu-hidden')).toBe(false);
          hamburger.click();
          expect(body.classList.contains('menu-hidden')).toBe(true);
        })
    });

    /* Intitial entries test suite */

    describe('Initial Entries', function() {

      /* This test checks the feed's inner html and makes sure it is present
       * if this test is true, it means that the loadFeed function is working
       * as expected.
       */

       beforeEach(function(done) {
         loadFeed(0, done);
       });
       it('call the loadFeed function and make sure it completes its work', function() {
         expect(document.querySelector('.feed').children.length).toBeGreaterThan(0);
       });
     });


    /* New feed selection test suite */

    describe('New Feed Selection', function() {

      /* This array will hold our two feed results so we can check them easily */

      var feeds = [];

      /* This test makes sure that when a new feed is loaded, the content of the feed
       * actually changes. Uwe accomplish this by checking the loadFeed inner html in index 0
       * against the loadFeed inner html in index 1
       */

        beforeEach(function(done) {
         loadFeed(0, function () {
           var firstFeed = document.querySelector('.entry').innerHTML;
           feeds.push(firstFeed);
           loadFeed(1, function() {
             var secondFeed = document.querySelector('.entry').innerHTML;
             feeds.push(secondFeed);
             done();
           });
         });
       });
       it('changes content when a new feed is loaded', function() {
         expect(feeds[0] != feeds[1]).toBe(true);
       });
    });
}());
