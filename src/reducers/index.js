import { combineReducers } from 'redux';
import beers from './beersReducer';
import favorites from './favoritesReducer';
import glasses from './glassesReducer';
import searchResult from './searchResultReducer';
//______________________________________________________________________________

const rootReducer = combineReducers({
    beers,
    favorites,
    glasses,
    searchResult
});

export default rootReducer;
