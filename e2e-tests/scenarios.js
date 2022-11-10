'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


 

  describe('form', function() {

    beforeEach(function() {
      browser.get('index.html#!/form');
    });
    it('should render form when user navigates to /form', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for form/);
    });

  });

  describe('list', function() {

    beforeEach(function() {
      browser.get('index.html#!/list');
    });
    it('should render form when user navigates to /list', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for list/);
    });

  });
});
