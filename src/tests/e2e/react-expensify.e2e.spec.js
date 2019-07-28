// TODO: Implement app start-up and login commans if possible.
module.exports = {
  'React-Expensify e2e test: dashboard': function (browser) {
    browser
      .url('localhost:8888')
      .waitForElementVisible('body')
      .expect.element('h1.login-title').text.to.contain('React-Expensify');

    browser
    	.waitForElementVisible('.login-btn.facebook')
      .expect.element('.login-btn.facebook').text.to.contain('Facebook');

    browser.end();
  }
};
