// making sure tests don't run until DOM is ready 
$(function() {

    // test suite called 'RSS Feeds'
    describe('RSS Feeds', function() {

        /*
         * test that makes sure allFeeds has been defined and not
         * empty
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*
         * test that makes sure that all elements have a URL
         * defined
         */

        it('has a URL defined', function() {
            for(const feed of allFeeds) {
                expect(feed.url).toBeDefined();
            }
        });

        /*
         * test that makes sure the URL is not empty
         */

        it('checks whether URL is empty', function() {
            for(const feed of allFeeds) {
                expect(feed.url.length).not.toBe(0);
            }
        });


        /*
         * test that makes sure all elements have a name defined and
         * that the name is not empty
         */

        it('has a name defined and the name is not empty', function() {
            for(const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });

    });


    // new test suite called 'The Menu'
    describe('The Menu', function() {

         /*
          * test that makes sure that the menu element is hidden
          * by default
          */

         it('is hidden by default', function() {
              let body = $('body');
              expect(body.hasClass('menu-hidden')).toBe(true);
         });

          /*
           * test that makes sure the menu is hidden or revealed
           * when the menu icon is clicked
           */

          it('changes visibility when menu icon is clicked', function() {
              let menuIcon = $('.menu-icon-link');
              let body = $('body');

              menuIcon.trigger('click');
              expect(body.hasClass('menu-hidden')).toBe(false);

              menuIcon.trigger('click');
              expect(body.hasClass('menu-hidden')).toBe(true);
          });

    });
    // new test suite called 'Initial Entries'
    describe('Initial Entries', function() {

        /*
         * test that makes sure loadFeed is called and has completed
         * its work
         */

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /*
         * test that makes sure there is at least one entry in the
         * feed
         */

        it('has loaded at least one entry in the feed', function() {
            let entry = $('.feed').find('.entry');

            expect(entry.length).not.toBe(0);
        });

    });

    // new test suite called 'New Feed Section'
    describe('New Feed Section', function() {

        /*
         * test that makes sure that content changes when a new feed
         * is loaded
         */

        let feedBefore;
        let newFeed;

        beforeEach(function(done) {
            $('.feed').empty();
            loadFeed(0, function() {
                feedBefore = $('.feed').html();
                loadFeed(1, done);
            });
        });

        it('ensures that content changes when feed is loaded', function() {
            newFeed = $('.feed').html();
            expect(feedBefore).not.toBe(newFeed);
        });
    });

}());
