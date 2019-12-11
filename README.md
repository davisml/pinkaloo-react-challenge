Welcome to the Stack Showdown code challenge. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Rules

The file src/modules/mock_data.json itself should not be modified. Consider this to be immutable data coming from an API.

## Tasks

- [x] Run the app using `yarn start`
- [ ] Show the total dollar amount of contributions in CampaignInfo
- [ ] Update the progress bar in CampaignInfo to show goal progress
- [ ] Display the associated user avatar & formatted name (join first_name & last_name) for each contribution
- [ ] Create and export an `addContribution` action in modules that accepts `amount` and `campaignId` as parameters
- [ ] Handle the `addContribution` action in redux and generate a transaction using the `amount` and `campaignId`. `id` should be auto-incremented using `(transactions.length + 1)`, `date` should be the current datetime JSON formatted, `userId` should be derived from `session.user.id`.
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
