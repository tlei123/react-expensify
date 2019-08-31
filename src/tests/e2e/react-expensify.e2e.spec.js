// Start local dev, ensure you're logged out, then run test.
// NOTE: Test-cases here are currently inter-dependent, and must be run in
// the order they're saved below.  Each case assumes as app-state that resulted
// from the previous case above it.
// TODO: Make each test-case independent, so that any single case can be
// individually run.
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

  'Filter Expenses': function (client) {
    const filterText = e2eTestExpenses[1].description;
    const filterTextFunction = (expense) => {
      return expense.description === filterText;
    };
    const textFilteredExpenses = e2eTestExpenses.filter(filterTextFunction);
    const filterStartDate = e2eTestExpenses[0].createdAt;
    const filterStartDateFunction = (expense) => {
      return expense.createdAt === filterStartDate;
    };
    const startDateFilteredExpenses =
      e2eTestExpenses.filter(filterStartDateFunction);
    const filterEndDate = e2eTestExpenses[2].createdAt;
    const filterEndDateFunction = (expense) => {
      return expense.createdAt === filterEndDate;
    };
    const endDateFilteredExpenses =
      e2eTestExpenses.filter(filterEndDateFunction);

    client
      .setValue(sel.textFilter, filterText)
      .expect.elements(sel.expenseCmp)
      .count.to.equal(textFilteredExpenses.length);
    client
      .expect.element(sel.description)
      .text.to.equal(filterText);

    client
      .clearValue(sel.textFilter)
      .setValue(sel.textFilter, [' ', client.Keys.BACK_SPACE])
      .expect.elements(sel.expenseCmp)
      .count.to.equal(e2eTestExpenses.length);

    client
      .setValue(sel.dateRangeFilterStart, filterStartDate)
      .click(sel.viewTitle)
      .expect.elements(sel.expenseCmp)
      .count.to.equal(startDateFilteredExpenses.length);
    client.expect.element(sel.date)
      .text.to.equal(`${filterStartDate.substring(0, 5)}:`);

    client
      .click(sel.clearDateRangeFilterBtn)
      .expect.elements(sel.expenseCmp)
      .count.to.equal(e2eTestExpenses.length);

    client
      .setValue(sel.dateRangeFilterEnd, filterEndDate)
      .click(sel.viewTitle)
      .expect.elements(sel.expenseCmp)
      .count.to.equal(endDateFilteredExpenses.length);
    client.expect.element(sel.date)
      .text.to.equal(`${filterEndDate.substring(0, 5)}:`);

    client
      .click(sel.clearDateRangeFilterBtn)
      .expect.elements(sel.expenseCmp)
      .count.to.equal(e2eTestExpenses.length);
  },

  'Sort Expenses': function (client) {
    client.waitForElementNotVisible('.DateRangePickerInput_clearDates', 500);
    client.expect.element(sel.sortMenu)
      .to.have.value.that.equals('date');
    client.expect.element(`${sel.expenseCmp}:first-of-type ${sel.description}`)
      .text.to.equal('Gum');
    client.expect.element(`${sel.expenseCmp}:nth-of-type(2) ${sel.description}`)
      .text.to.equal('Rent');
    client.expect.element(`${sel.expenseCmp}:nth-of-type(3) ${sel.description}`)
      .text.to.equal('Credit card');

    client.click(sel.sortMenu, function () {
        client.click(`${sel.sortOption}[value=amount]`);
      })
      .expect.element(sel.sortMenu)
      .to.have.value.that.equals('amount')
      .before(500);
    client.expect.element(`${sel.expenseCmp}:first-of-type ${sel.description}`)
      .text.to.equal('Rent');
    client.expect.element(`${sel.expenseCmp}:nth-of-type(2) ${sel.description}`)
      .text.to.equal('Credit card');
    client.expect.element(`${sel.expenseCmp}:nth-of-type(3) ${sel.description}`)
      .text.to.equal('Gum');

    client.click(sel.sortMenu, function () {
        client.click(`${sel.sortOption}[value=date]`);
      });
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
  },
};
