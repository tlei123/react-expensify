// IMPORTANT - Log out of your personal Google account before testing.
const moment = require('moment');

const Helpers = require('./helpers.js');
const { e2eTestExpenses } = require('../fixtures/e2eTestExpenses');

// CSS Selectors
// TODO: Modularize all selecors for reuse across test-files.
const loginPageTitle = 'h1.login-title';
const addExpenseNavLink = '.header-nav a[href="/add"]';
const dashboard = '.expensedashboard.component';
const expenseWrapper = '.expense-wrapper';
const editButton = '.expense-edit';
const expenseForm = '.expenseform.component';
const date = '.expense-createdat';
const description = '.expense-description';
const amount = '.expense-amount';
const dateField = 'input[name=date]';
const descriptionField = 'input[name=description]';
const amountField = 'input[name=amount]';
const noteField = 'textarea[name=note]';
const submitButton = 'button[type=submit]';
const expenseList = '.expenselist.component';

module.exports = {
  'Start-up, Login, & Delete All Expenses': function (client) {
    client
      .url('localhost:8888')
      .waitForElementVisible('body')
      .expect.element(loginPageTitle).text.to.contain('React-Expensify');

    Helpers.login(client)
      .then(
        function () {
          client.waitForElementVisible(
            dashboard,
            10000,
            false
          );
        }
      );

    Helpers.clearExpenses(client);
  },

  'Add Expenses': function (client) {
    e2eTestExpenses.forEach(expense => {
      client.waitForElementVisible(addExpenseNavLink, 500)
        .click(addExpenseNavLink)
        .waitForElementVisible(expenseForm, 1000, false, () => {
          Helpers.fillExpense(client, expense)
            .then((resolveValue) => {
              console.log(resolveValue);
            });
        });
    });

    client.expect.elements(expenseWrapper)
      .count.to.equal(e2eTestExpenses.length);
  },

  'Edit Expense': function (client) {
    const firstExpense = `${expenseWrapper}:first-of-type`;
    const firstEditButton = `${firstExpense} ${editButton}`;
    const updatedExpense = {
      createdAt: moment().add(1, 'days').format('L'),
      description: 'Listerine Strips',
      amount: '1.87',
    };

    client.waitForElementVisible(firstEditButton, 500)
      .click(firstEditButton)
      .waitForElementVisible(expenseForm, 500)
      .clearValue(dateField)
      .setValue(dateField, updatedExpense.createdAt)
      .click(descriptionField)
      .clearValue(descriptionField)
      .setValue(descriptionField, updatedExpense.description)
      .clearValue(amountField)
      .setValue(amountField, updatedExpense.amount)
      .click(submitButton)
      .pause(100)
      .waitForElementVisible(expenseList, 10000, false, () => {
        client
          .assert.containsText(
            `${firstExpense} ${date}`,
            updatedExpense.createdAt.substring(0, 5),
          )
          .assert.containsText(
            `${firstExpense} ${description}`,
            updatedExpense.description,
          )
          .assert.containsText(
            `${firstExpense} ${amount}`,
            updatedExpense.amount,
          );
      });
  }
};
