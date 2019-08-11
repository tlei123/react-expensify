// TODO: Populate this suite w/ real tests.
var Helpers = require('./helpers');
var testExpenses = require('../fixtures/testExpenses');

module.exports = {
  'React-Expensify e2e test': function (client) {
    client
      .url('localhost:8888')
      .waitForElementVisible('body')
      .expect.element('h1.login-title').text.to.contain('React-Expensify');

    Helpers.login(client)
    	.click('a[href="/add"]')
    	.waitForElementVisible('.expenseform.component', 500);

    Helpers.fillExpenses(client, testExpenses);

    client.end();
  }
};
