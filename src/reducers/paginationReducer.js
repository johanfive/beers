import * as actionType from '../constants';
//______________________________________________________________________________


const initPage = {
    id: '1',
    fetchedOnce: false,
    results: []
};

const page = (state = initPage, action) => {
    if (action.type === actionType.RECEIVE_RECOMMENDATIONS) {
        return {
            ...state,
            fetchedOnce: true,
            // recToShow is an Array built in `Results/actions.js`
            results: [...state.results, ...action.recToShow]
        }
    } else {
        return state;
    }
}





const initPagination = {
    currentPage: 1,
    '1': initPage
};

const pagination = (state = initPagination, action) => {

    // IMPORTANT destructuring here for use in all cases below
    const {currentPage} = state;
    // -------------------------

    switch (action.type) {

        case actionType.NEW_SEARCH_WORD: return initPagination;

        case actionType.INCR_CURR_PAGE: return {...state, currentPage: currentPage + 1};
        case actionType.DECR_CURR_PAGE: return {...state, currentPage: currentPage - 1};

        case actionType.RECEIVE_RECOMMENDATIONS:
        if (action.recOnNextPage) {
            return {
                ...state,
                [currentPage]: page(state[currentPage], action),
                [currentPage + 1]: {
                    id: currentPage + 1,
                    fetchedOnce: false,
                    results: [action.recOnNextPage]
                }
            };
        } else {
            return {
                ...state,
                [currentPage]: page(state[currentPage], action)
            };
        }

        default:
            return state;
    }
}


export default pagination;
