import { combineReducers } from 'redux';
import beers from './beersReducer';
import favorites from './favoritesReducer';
import glasses from './glassesReducer';
import search from './searchReducer';
//______________________________________________________________________________

const rootReducer = combineReducers({
    beers,
    favorites,
    glasses,
    search
});

export default rootReducer;
