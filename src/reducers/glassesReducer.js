import { combineReducers } from 'redux';
import { actionType } from '../constants';
import status from './statusReducer';
//______________________________________________________________________________


const initGlass = {
        glassId: '',
        status: {
            isLoading: false,
            hasErrored: false
        },
        beer: ''
};


const glass = (state = initGlass, action) => {
    switch (action.type) {
        case actionType.getGlass:
            return {
                ...state,
                glassId: action.glassId
            };
        case actionType.loading:
        case actionType.errored:
            return {
                ...state,
                status: status(state[status], action)
            };
        case actionType.pour:
            return {
                ...state,
                beer: action.beer.id
            };
        default:
            return state;
    }
};


const byId = (state = {}, action) => {
    switch (action.type) {
        case actionType.getGlass:
        case actionType.loading:
        case actionType.errored:
        case actionType.pour:

            if (action.glassId) {return {
                ...state,
                [action.glassId]: glass(state[action.glassId], action)
            };} else {return state;}

        case actionType.clearGlass:
            let stateCopy = state;
            delete stateCopy[action.glassId];
            return stateCopy;

        default:
            return state;
    }
};


const allIds = (state = [], action) => {
    switch (action.type) {
        case actionType.getGlass:
            return [...state, action.glassId];
        case actionType.clearGlass:
            return state.filter(id => id !== action.glassId);
        default:
            return state;
    }
};


const glasses = combineReducers({
    byId,
    allIds
});

export default glasses;
