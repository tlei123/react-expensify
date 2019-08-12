// IMPORTANT: Log out of your personal Google account before running test.
// TODO: Populate this suite w/ real tests.
const Helpers = require('./helpers.js');
var testExpenses = require('../fixtures/testExpenses');

module.exports = {
  'React-Expensify e2e test': function (client) {
    client
      .url('localhost:8888')
      .waitForElementVisible('body')
      .expect.element('h1.login-title').text.to.contain('React-Expensify');

    // Login
    Helpers.login(client);
    
    client.waitForElementVisible('.expensedashboard.component', 10000);
  }
};
