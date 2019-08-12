function switchTestWindow (client, index) {
  client.windowHandles(function (result) {
    client.switchWindow(result.value[index]);
  })
}

function login (client) {
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
  client.waitForElementVisible(usernameInputSelector, 10000, function () {
    client.setValue(usernameInputSelector, 'tze1testuser1@gmail.com', function () {
      client.keys(client.Keys.ENTER);
    });
  });
  client.pause(1000);
  client.waitForElementVisible(passwordInputSelector, 3000, function () {
    client.setValue(passwordInputSelector, 'k;klL*6bP7Y', function () {
      client.keys(client.Keys.ENTER, function () {
        switchTestWindow(client, 0);
      });
    });
  });
}

function fillExpenses (client, testExpenses) {
  return client;
}

module.exports = {
  switchTestWindow,
  login,
  fillExpenses,
};
