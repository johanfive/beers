import * as actionType from '../constants';
//______________________________________________________________________________



const favorites = (state = [], action) => {
    if (action.type === actionType.TOGGLE_FAVORITE) {

        const idExists = state.some(id => id === action.beerId);
        if (idExists) {
            // Remove
            return state.filter(id => id !== action.beerId);
        } else {
            // Add
            return [...state, action.beerId];
        }

    } else {
        return state;
    }
};

export default favorites;
// Action toggleFavorite also impacts the beersReducer
