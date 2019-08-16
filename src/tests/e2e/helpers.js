function switchTestWindow (client, index) {
  client.windowHandles(function (result) {
    client.switchWindow(result.value[index]);
  })
}

// TODO: Add helper to delete ALL expenses for test start.

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

function fillExpense (client, expense) {
  return new Promise((resolve) => {
    const dateFieldSelector = 'input[name=date]';
    const descriptionFieldSelector = 'input[name=description]';
    const amountFieldSelector = 'input[name=amount]';
    const noteFieldSelector = 'textarea[name=note]';
    const submitButtonSelector = 'button[type=submit]';
    const expenselistSelector = '.expenselist.component';

    client
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
  fillExpense,
};
