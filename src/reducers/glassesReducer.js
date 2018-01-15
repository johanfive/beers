import { combineReducers } from 'redux';
import * as actionType from '../constants';
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
        case actionType.GET_GLASS:
            return {
                ...state,
                glassId: action.glassId
            };
        case actionType.LOADING:
        case actionType.ERRORED:
            return {
                ...state,
                status: status(state[status], action)
            };
        case actionType.ADD_BEER_TO_REDUX_STORE:
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
        case actionType.GET_GLASS:
        case actionType.LOADING:
        case actionType.ERRORED:
        case actionType.ADD_BEER_TO_REDUX_STORE:

            if (action.glassId) {
                return {
                    ...state,
                    [action.glassId]: glass(state[action.glassId], action)
                };
            } else {
                return state;
            }

        case actionType.CLEAR_GLASS:
            let stateCopy = state;
            delete stateCopy[action.glassId];
            return stateCopy;

        default:
            return state;
    }
};


const allIds = (state = [], action) => {
    switch (action.type) {
        case actionType.GET_GLASS:
            return [...state, action.glassId];
        case actionType.CLEAR_GLASS:
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
