import { combineReducers } from 'redux';
import beers from './beersReducer';
import ids from './idsReducer';
//______________________________________________________________________________

const rootReducer = combineReducers({
    beers,
    ids
});

export default rootReducer;
