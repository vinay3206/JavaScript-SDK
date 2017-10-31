# JavaScript-SDK
The JavaScript SDK for developers(including third party developers/vendors) to create custom modules by using Carpal Fleet core services.

The SDK is under active development, we will release the latest version to npm on weekly basis.

The current version of this SDK is **0.0.27**

To install CarPal SDK: **npm i --save carpal**

# Methods

| Module                        | Method                            | Description          |
| ----------------------------- |-----------------------------------| ---------------------|
| carpal/data/account/Auth      | getTokenAsync(email, password)    | This returns the both access token and refresh token|
| carpal/data/account/Account   | resetPasswordAsync(email)         | This will call the email service to send out a link |
| carpal/data/account/Account   | getMyJobs(id, token, date)        | This returns list of a driver's jobs for given date |
| carpal/data/public/Country    | getCountriesAsync()               | This returns list of countries availale for carpal services |
| carpal/data/public/Identity   | getIdentitiesAsync()              | This returns list of identities(cities) available for carpal services|
| carpal/data/public/Language   | getLanguagesAsync()               | This returns list of languages supported by carpal system |


License: MIT https://opensource.org/licenses/MIT
