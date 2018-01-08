import { actionType } from '../constants';
//______________________________________________________________________________


const searchResult = (state = [], action) => {
    if (action.type === actionType.pour && !action.glassId) {
        return [...state, action.beer.id];
    } else if (action.type === 'CLEAR_RESULTS') {
        return [];
    } else if (action.type === 'NOPE') {
        return ['NOPENOPENOPE'];
    } else {
        return state;
    }
};

export default searchResult;
