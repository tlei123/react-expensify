// IMPORTANT - Before starting this e2e test:
// 1.  Log out of your personal Google account; and
// 2.  Until a delete-all-expenses helper has been implemented,
//     delete ALL expenses.

const Helpers = require('./helpers.js');
const { e2eTestExpenses } = require('../fixtures/e2eTestExpenses');

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

    // Until delete-all-expenses helper is available,
    // leverage pause below to manually delete all expenses in test-window.
    client.pause(15000).end();
  },
};
