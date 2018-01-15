Working [demo](https://johanfive.github.io/beers)  


This small project showcases the use of [Axios](https://www.npmjs.com/package/axios) in combination to [redux-thunk](https://www.npmjs.com/package/redux-thunk)
for dispatching several actions asynchronously in response to calls to a public API ([Punk Beer](https://punkapi.com/))  


One could either  
make 1 request and receive 1 payload with multiple items  
OR  
make 1 request per item multiple times.  


With the former choice, only 1 spinner has to be shown. It's more likely that the user will get to contemplate it for a while...  

With the latter choice, there is 1 spinner per item.  
The challenge is to ensure the spinners appear and disappear only in relation to the item they're linked to.  


I chose the last option. Depending on the data, this could translate into a perceived gain of speed.  
Even if the data isn't recovered, the user gets to see the UI change 1 step closer to the final, expected outcome.  
(*As opposed to staring at 1 spinner in the middle of the page.*)  


Built a component that handles pagination.  
Instead of making 1 request with a heavy payload response and backing it all up in a redux store, each new page starts a new request to the backend.  
Challenge is to avoid making a new request if the data is already available in the redux store.  


Next commits will continue to refactor, and implement   [React-Router](https://www.npmjs.com/package/react-router) to add separate each features.  

Minor effort went into the looks.  


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)  
