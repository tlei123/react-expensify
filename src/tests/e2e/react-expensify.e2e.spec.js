// IMPORTANT - Log out of your personal Google account before testing.

const Helpers = require('./helpers.js');
const { e2eTestExpenses } = require('../fixtures/e2eTestExpenses');

module.exports = {
  'Start-up, Login, & Clear Expenses': function (client) {
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

    Helpers.clearExpenses(client);
  },

  'Add Expenses': function (client) {
    e2eTestExpenses.forEach(expense => {
      client.waitForElementVisible('.header-nav a[href="/add"]', 500)
        .click('.header-nav a[href="/add"]')
        .waitForElementVisible('.expenseform.component', 1000, false, () => {
          Helpers.fillExpense(client, expense)
            .then((resolveValue) => {
              console.log(resolveValue);
            });
        });
    });

    client.expect.elements('.expense-wrapper')
      .count.to.equal(e2eTestExpenses.length);
  },
};
