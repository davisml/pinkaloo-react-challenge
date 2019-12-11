Welcome to the Stack Showdown code challenge. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Rules

The file src/modules/mock_data.json itself should not be modified. Consider this to be immutable data coming from an API.

## Tasks

- [x] Run the app using `yarn start`
- [ ] Replace placeholder values in `src/components/CampaignDetails.js`
	- Display total dollar amount of contributions for the campaign
	- Provide the campaign's goal progress to `<ProgressBar />`
- [ ] Replace placeholder values in `src/components/CampaignContributions.js`
	- Display the associated user avatar
	- Display the associated user name. Show both `first_name` and `last_name` if available
- [ ] Sort campaign contributions by date. Newest contributions should display at the top
- [ ] Add the ability to donate to the selected campaign using the form found at `src/components/DonateForm`
	- Create an addContribution action in `src/modules/index.js` that accepts accepts `amount` and `campaignId` as parameters
	- Handle the `addContribution` action in redux and generate a transaction using the `amount` and `campaignId`. `id` should be auto-incremented using `(transactions.length + 1)`, `date` should be the current datetime JSON formatted, `userId` should be derived from `session.user.id`.
	- Decrease the user's available balance after donating
	- Validate before submitting the donate form to ensure the user has enough funds available
- [ ] Prevent `ProgressBar` component from visually overflowing when `progress > 1.0`

```js
{
    "id": /* Auto-generate */,
    "amount": "NUMBER",
    "campaignId": "python",
    "date": "2019-02-27T04:00:00.000Z",
    "userId": 12
}
```
- [ ] Wire the donate form to 

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
