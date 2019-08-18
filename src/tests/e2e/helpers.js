function switchTestWindow (client, index) {
  client.windowHandles(function (result) {
    client.switchWindow(result.value[index]);
  })
}

function login (client) {
  return new Promise(function (resolve, reject) {
    // Homepage (Login) element selectors.
    const loginBtnSelector = '.login-btn.google';
    const usernameInputSelector = 'input[type=email]';
    const passwordInputSelector = 'input[type=password]';
    const googleLoginBtnSelector = 'button[type=submit]';
    // App pages element selectors.
    const topNavSelector = 'header .nav';
    const pageTitleSelector = 'h2.page-title';

    client
      .waitForElementVisible(loginBtnSelector, 500)
      .click(loginBtnSelector);

    switchTestWindow(client, 1);
    client.waitForElementVisible(usernameInputSelector, 10000, false, () => {
      client.setValue(
        usernameInputSelector,
        ['tze1testuser1@gmail.com', client.Keys.ENTER],
        () => {
          // Allow for Firebase Auth processing & DOM-change, so as to
          // avoid state-element-reference error on next weitFormElementVisible.
          client.pause(1500);
        }
      );
    });
    client.waitForElementVisible(passwordInputSelector, 5000, false, () => {
      client.setValue(
        passwordInputSelector,
        ['k;klL*6bP7Y', client.Keys.ENTER],
        () => {
          switchTestWindow(client, 0);
          resolve('Login finished.');
      });
    });
  });
}

function clearExpenses (client) {
  // Dashboard element selectors
  const clearFilterButton = '.DateRangePickerInput_clearDates';
  const expenseComponent = '.expense.component';
  const deleteButton = '.expense-remove';
  const topDeleteButton = `${expenseComponent}:first-child ${deleteButton}`;
  const confirmButton = 'button.modal-ok';
  const alertCloseButton = '.alert button.close';

  let expenseWrappersLength = 0;

  client
    .click(clearFilterButton)
    .elements('css selector', expenseComponent, result => {
      expenseWrappersLength = result.value.length;
      if (expenseWrappersLength > 0) {
        for (let i = 0; i < expenseWrappersLength; i++) {
          client
            .click(topDeleteButton)
            .pause(50)
            .click(confirmButton)
            .pause(50)
            .click(alertCloseButton)
            .pause(50);
        }
      }
    })
    .expect.elements(expenseComponent).count.to.equal(0);
}

function fillExpense (client, expense) {
  return new Promise((resolve) => {
    const dateFieldSelector = 'input[name=date]';
    const descriptionFieldSelector = 'input[name=description]';
    const amountFieldSelector = 'input[name=amount]';
    const noteFieldSelector = 'textarea[name=note]';
    const submitButtonSelector = 'button[type=submit]';
    const expenselistSelector = '.expenselist.component';

    client
      .clearValue(dateFieldSelector)
      .setValue(dateFieldSelector, expense.createdAt)
      .click(descriptionFieldSelector)
      .setValue(descriptionFieldSelector, expense.description)
      .setValue(amountFieldSelector, expense.amount)
      .setValue(noteFieldSelector, expense.note)
      .click(submitButtonSelector)
      .pause(100)
      .waitForElementVisible(expenselistSelector, 10000, false, () => {
        resolve('Expense submitted.');
      });
  });
}

module.exports = {
  switchTestWindow,
  login,
  clearExpenses,
  fillExpense,
};
