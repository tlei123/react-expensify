// TODO: Populate this suite w/ real tests.
module.exports = {
  'React-Expensify e2e test': function (browser) {
    browser
      .url('localhost:8888')
      .waitForElementVisible('body')
      .expect.element('h1.login-title').text.to.contain('React-Expensify');

    browser.end();
  }
};
