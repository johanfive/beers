import * as actionType from '../constants';
import { combineReducers } from 'redux';
import pagination from './paginationReducer';
//______________________________________________________________________________


const initSearch = {
    isSearching: false,
    searchWord: ''
};


const searchStuff = (state = initSearch, action) => {
    switch (action.type) {

        case actionType.NEW_SEARCH_WORD: return {...state, searchWord: action.searchWord};

        case actionType.REQUEST_RECOMMENDATIONS: return {...state, isSearching: true};
        case actionType.RECEIVE_RECOMMENDATIONS:
        case actionType.FAILREQ_RECOMMENDATIONS: return {...state, isSearching: false};

        default:
            return state;
    }
}


const search = combineReducers({
    searchStuff,
    pagination
});


export default search;
