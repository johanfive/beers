See it [here](https://johanfive.github.io/beers/)  

This small project showcases the use of [Axios](https://www.npmjs.com/package/axios) in combination to [redux-thunk](https://www.npmjs.com/package/redux-thunk)
for async calls to a public API ([Punk Beer](https://punkapi.com/))


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



Next commits will continue to refactor, and implement [React-Router](https://www.npmjs.com/package/react-router) to add a link to a *Favorites* page.
I will try to think of scenarios requiring specific calls like:
```
`https://api.punkapi.com/v2/beers/${id}`
```
Might have to start a new project altogether to showcase POST requests.



Minor effort went into the looks.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
