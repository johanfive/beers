import { combineReducers } from 'redux';
import * as actionType from '../constants';
//______________________________________________________________________________


const initBeer = {
        id: '',
        name: '',
        food: [],
        liked: false
};


const beer = (state = initBeer, action) => {
    switch (action.type) {
        case actionType.ADD_BEER_TO_REDUX_STORE:
            return {
                ...state,
                id: action.beer.id,
                name: action.beer.name,
                food: action.beer.food,
            };
        case actionType.TOGGLE_FAVORITE:
            return {
                ...state,
                liked: !state.liked
            };
        default:
            return state;
    }
};


const byId = (state = {}, action) => {
    switch (action.type) {
        case actionType.ADD_BEER_TO_REDUX_STORE:
            return {
                ...state,
                [action.beer.id]: beer(state[action.beer.id], action)
            };
        case actionType.TOGGLE_FAVORITE:
            return {
                ...state,
                [action.beerId]: beer(state[action.beerId], action)
            }
        default:
            return state;
    }
};


const allIds = (state = [], action) => {
    switch (action.type) {
        case actionType.ADD_BEER_TO_REDUX_STORE:
            return [...state, action.beer.id];
        default:
            return state;
    }
};


const beers = combineReducers({
    byId,
    allIds
});

export default beers;
