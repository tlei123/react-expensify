function login(client) {
	// Homepage (Login) element selectors.
	const loginBtnSelector = '.login-btn.google';
	const usernameInputSelector = 'input[name=username]';
	const passwordInputSelector = 'input[name=password]';
	const googleLoginBtnSelector = 'button[type=submit]';
	// App pages element selectors.
	const topNavSelector = 'header .nav';
	const pageTitleSelector = 'h2.page-title';

	client
		.waitForElementVisible(loginBtnSelector, 500)
		.click(loginBtnSelector, function() {
			client
				.pause(500)
				.switchWindow(loginPopupHandle)
				.waitForElementVisible(usernameInputSelector, 500)
				.fill(usernameInputSelector, 'tze1testuser1@gmail.com')
				.fill(passwordInputSelector, 'k;klL*6bP7Y')
				.click(googleLoginBtnSelector);
		});

	return client;
}

function fillExpenses(client, testExpenses) {
	return client;
}

module.exports = {
	login,
	fillExpenses,
};
