import * as actionType from '../../constants';
//______________________________________________________________________________



export const newSearchWord = searchWord => ({
    type: actionType.NEW_SEARCH_WORD,
    searchWord
});
