// IMPORTANT: Log out of your personal Google account before running test.
// TODO: Populate this suite w/ real tests.
const Helpers = require('./helpers.js');
var testExpenses = require('../fixtures/testExpenses');

module.exports = {
  'Start-up & Login': function (client) {
    client
      .url('localhost:8888')
      .waitForElementVisible('body')
      .expect.element('h1.login-title').text.to.contain('React-Expensify');

    Helpers.login(client)
      .then(
        function () {
          client.waitForElementVisible(
            '.expensedashboard.component',
            10000,
            false
          );
        }
      );
  },

  'Add expense': function (client) {
    client.waitForElementVisible('.header-nav a[href="/add"]', 500)
      .click('.header-nav a[href="/add"]')
      .waitForElementVisible('.expenseform.component', 1000);
    client.expect.element('input[name=date]').to.be.visible;
    client.expect.element('input[name=description]').to.be.visible;
    client.expect.element('input[name=amount]').to.be.visible;
    client.expect.element('textarea[name=note]').to.be.visible;
    client.expect.element('button[type=submit]').to.be.visible;
  }
};
