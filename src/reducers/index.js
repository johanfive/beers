import { combineReducers } from 'redux';
import beers from './beersReducer';
import favorites from './favoritesReducer';
import glasses from './glassesReducer';
//______________________________________________________________________________

const rootReducer = combineReducers({
    beers,
    favorites,
    glasses
});

export default rootReducer;
