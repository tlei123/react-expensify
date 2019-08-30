const selectors = {
  loginPgTitle: 'h1.login-title',
  loginGoogle: '.login-btn.google',
  usernameFld: 'input[type=email]',
  passwordFld: 'input[type=password]',

  topNav: 'header .nav',
  viewTitle: 'h2',
  addExpenseLnk: '.header-nav a[href="/add"]',

  dashboardCmp: '.expensedashboard.component',
  textFilter: '[placeholder="filter by text"]',
  dateRangeFilterStart: '[name=dateRangeStart]',
  dateRangeFilterEnd: '[name=dateRangeEnd]',
  clearDateRangeFilterBtn: '.DateRangePickerInput_clearDates',
  sortMenu: '[name=sortby]',
  sortOption: '[name=sortby] option',
  expenseListCmp: '.expenselist.component',
  expenseCmp: '.expense.component',
  date: '.expense-createdat',
  description: '.expense-description',
  amount: '.expense-amount',
  editBtn: '.expense-edit',
  deleteBtn: '.expense-remove',
  topDeleteBtn: '.expense.component:first-child .expense-remove',
  confirmBtn: 'button.modal-ok',
  alertCloseBtn: '.alert button.close',

  expenseFormCmp: '.expenseform.component',
  dateFld: 'input[name=date]',
  descriptionFld: 'input[name=description]',
  amountFld: 'input[name=amount]',
  noteFld: 'textarea[name=note]',
  submitBtn: 'button[type=submit]',
  expenselistCmp: '.expenselist.component',
};

function switchTestWindow (client, index) {
  client.windowHandles(function (result) {
    client.switchWindow(result.value[index]);
  })
}

function login (client) {
  return new Promise(function (resolve, reject) {
    const s = selectors;

    client
      .waitForElementVisible(s.loginGoogle, 500)
      .click(s.loginGoogle);

    switchTestWindow(client, 1);
    client.waitForElementVisible(s.usernameFld, 10000, false, () => {
      client.setValue(
        s.usernameFld,
        ['tze1testuser1@gmail.com', client.Keys.ENTER],
        () => {
          // Allow for Firebase Auth processing & DOM-change, so as to
          // avoid state-element-reference error on next weitFormElementVisible.
          client.pause(1500);
        }
      );
    });
    client.waitForElementVisible(s.passwordFld, 5000, false, () => {
      client.setValue(
        s.passwordFld,
        ['k;klL*6bP7Y', client.Keys.ENTER],
        () => {
          switchTestWindow(client, 0);
          resolve('Login finished.');
      });
    });
  });
}

function clearExpenses (client) {
  const s = selectors;

  let expensesLength = 0;

  client
    .click(s.clearDateRangeFilterBtn)
    .elements('css selector', s.expenseCmp, result => {
      expensesLength = result.value.length;
      if (expensesLength > 0) {
        for (let i = 0; i < expensesLength; i++) {
          client
            .click(s.topDeleteBtn)
            .pause(50)
            .click(s.confirmBtn)
            .pause(50)
            .click(s.alertCloseBtn)
            .pause(50);
        }
      }
    })
    .expect.elements(s.expenseCmp).count.to.equal(0);
}

function fillExpense (client, expense) {

  return new Promise((resolve) => {
    const s = selectors;

    client
      .clearValue(s.dateFld)
      .setValue(s.dateFld, expense.createdAt)
      .click(s.descriptionFld)
      .setValue(s.descriptionFld, expense.description)
      .setValue(s.amountFld, expense.amount)
      .setValue(s.noteFld, expense.note)
      .click(s.submitBtn)
      .pause(100)
      .waitForElementVisible(s.expenselistCmp, 10000, false, () => {
        resolve('Expense submitted.');
      });
  });
}

module.exports = {
  selectors,
  switchTestWindow,
  login,
  clearExpenses,
  fillExpense,
};
