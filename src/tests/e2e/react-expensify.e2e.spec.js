// Start local dev, ensure you're logged out, then run test.
const moment = require('moment');

const Helpers = require('./helpers.js');
const { e2eTestExpenses } = require('../fixtures/e2eTestExpenses');

const sel = Helpers.selectors;

module.exports = {
  'Start-up, Login, & Delete All Expenses': function (client) {
    client
      .url('localhost:8888')
      .waitForElementVisible('body')
      .expect.element(sel.loginPgTitle).text.to.contain('React-Expensify');

    Helpers.login(client)
      .then(
        function () {
          client.waitForElementVisible(
            sel.dashboardCmp,
            10000,
            false
          );
        }
      );

    Helpers.clearExpenses(client);
  },

  'Add Expenses': function (client) {
    e2eTestExpenses.forEach(expense => {
      client.waitForElementVisible(sel.addExpenseLnk, 500)
        .click(sel.addExpenseLnk)
        .waitForElementVisible(sel.expenseFormCmp, 1000, false, () => {
          Helpers.fillExpense(client, expense)
            .then((resolveValue) => {
              console.log(resolveValue);
            });
        });
    });

    client.expect.elements(sel.expenseCmp)
      .count.to.equal(e2eTestExpenses.length);
  },

  'Edit Expense': function (client) {
    const firstExpense = `${sel.expenseCmp}:first-child`;
    const firstEditButton = `${firstExpense} ${sel.editBtn}`;
    const updatedExpense = {
      createdAt: moment().add(1, 'days').format('L'),
      description: 'Listerine Strips',
      amount: '1.87',
    };

    client.waitForElementVisible(firstEditButton, 500)
      .click(firstEditButton)
      .waitForElementVisible(sel.expenseFormCmp, 500)
      .clearValue(sel.dateFld)
      .setValue(sel.dateFld, updatedExpense.createdAt)
      .click(sel.descriptionFld)
      .clearValue(sel.descriptionFld)
      .setValue(sel.descriptionFld, updatedExpense.description)
      .clearValue(sel.amountFld)
      .setValue(sel.amountFld, updatedExpense.amount)
      .click(sel.submitBtn)
      .pause(100)
      .waitForElementVisible(sel.expenseListCmp, 10000, false, () => {
        client
          .assert.containsText(
            `${firstExpense} ${sel.date}`,
            updatedExpense.createdAt.substring(0, 5),
          )
          .assert.containsText(
            `${firstExpense} ${sel.description}`,
            updatedExpense.description,
          )
          .assert.containsText(
            `${firstExpense} ${sel.amount}`,
            updatedExpense.amount,
          );
      });
  }
};
