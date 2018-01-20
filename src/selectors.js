// B E E R S

// returns ARRAY of STRINGS
export const getFoodPairings = (state, beerId) => state.beers.byId[beerId].food;

// returns BOOL
export const wasLiked = (state, beerId) => state.beers.byId[beerId].liked;

// returns STRING
export const getNameOf = (state, beer) => state.beers.byId[beer].name;



// F A V O R I T E S

// returns INT
export const getTotalLikes = state => state.favorites.length;

// returns ARRAY of INTs. (Beer Ids)
export const getAllFavoriteBeers = state => state.favorites;



// G L A S S

// returns BOOL. (True while waiting for Beer Id)
export const beerInGlassIsLoading = (state, glassId) => state.glasses.byId[glassId].status.isLoading;

// returns BOOL. (True when network request failed)
export const hasErrored = (state, glassId) => state.glasses.byId[glassId].status.hasErrored;

// returns INT. (Beer Id)
export const getBeerIdFrom = (state, glassId) => state.glasses.byId[glassId].beer;

// returns ARRAY of INTs. (Glass Ids)
export const getAllGlasses = state => state.glasses.allIds;




// S E A R C H    &    P A G I N A T I O N

// returns BOOL. (True if the page already has initiated a network request)
export const wasFetched = (state, page) => state.search.pagination[page].fetchedOnce;

// returns INT. (-1 because pagination object contains a 'currentPage' property)
export const getTotalPages = state => Object.keys(state.search.pagination).length - 1;

// returns ARRAY of INTs. (Beer Ids)
export const getResultsIn = (state, page) => state.search.pagination[page].results;

// returns INT (Page Id)
export const getCurrentPage = state => state.search.pagination.currentPage;

// returns STRING
export const getSearchWord = state => state.search.searchStuff.searchWord;

// returns BOOL. (True while waiting for search results)
export const isSearching = state => state.search.searchStuff.isSearching;
