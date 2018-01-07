import { actionType } from '../constants';
//______________________________________________________________________________


// This is neither a stack (LIFO) nor a queue (FIFO)
// It searches the array for an element
// Remove it if found
// Add it otherwise

const favorites = (state = [], action) => {
    if (action.type === actionType.toggleFavorite) {

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
