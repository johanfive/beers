<h1>Working demo</h1>
See it [here](https://johanfive.github.io/beers/)

<br />
<br />

This small project showcases the use of [Axios](https://www.npmjs.com/package/axios) in combination to [redux-thunk](https://www.npmjs.com/package/redux-thunk)
for async calls to a public API ([Punk Beer](https://punkapi.com/))

<br />
<br />

One could either
<br />
make 1 request and receive 1 payload with multiple items
<br />
OR
<br />
make 1 request per item multiple times.

<br />
With the former choice, only 1 spinner has to be shown. It's more likely that the user will get to contemplate it for a while...

<br />
With the latter choice, there is 1 spinner per item.
<br />
The challenge is to ensure the spinners appear and disappear only in relation to the item they're linked to.

<br />
<br />

I chose the last option. Depending on the data, this could translate into a perceived gain of speed.
<br />
Even if the data isn't recovered, the user gets to see the UI change 1 step closer to the final, expected outcome.
<br />
(*As opposed to staring at 1 spinner in the middle of the page.*)

<br />
<br />

Will build a component that handles pagination.
<br />
Instead of making 1 request with a heavy response and backup everything in a redux store, each new page will start a new request to the backend.
<br />
Challenge will be to avoid making a new request if the data is already available in the redux store.

<br />
<br />

Next commits will continue to refactor, and implement [React-Router](https://www.npmjs.com/package/react-router) to add a link to the *Favorites* page.

<br />
Minor effort went into the looks.

<br />
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
