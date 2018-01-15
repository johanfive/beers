 import * as actionType from '../constants';
//______________________________________________________________________________


const initSearch = {
    isSearching: false,
    searchWord: '',
    currentPage: 1,
    pagination: {
        '1': {
            id: '1',
            fetchedOnce: false,
            results: []
        }
    }
};


const search = (state = initSearch, action) => {
    switch (action.type) {

        case actionType.NEW_SEARCH_WORD:
            return {
                ...initSearch, // to reset
                searchWord: action.searchWord
            };

        case actionType.INCR_CURR_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1
            };

        case actionType.DECR_CURR_PAGE:
            return {
                ...state,
                currentPage: state.currentPage - 1
            };

        case actionType.RECEIVE_RECOMMENDATIONS:
        if (action.recOnNextPage) {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    [state.currentPage]: {
                        id: state.currentPage,
                        fetchedOnce: true,
                        results: action.recToShow
                    },
                    [state.currentPage + 1]: {
                        ...state.pagination[state.currentPage + 1],
                        id: state.currentPage + 1,
                        results: [action.recOnNextPage]
                    }
                }
            };
        } else {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    [state.currentPage]: {
                        id: state.currentPage,
                        fetchedOnce: true,
                        results: action.recToShow
                    }
                }
            };
        }

        default:
            return state;
    }
}


export default search;
