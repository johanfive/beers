import { actionType } from './constants';
//______________________________________________________________________________


/*
const initBeers = {
    aBeer: {
        id: 'aBeer',
        isLoading: false,
        error: false,
        name: 'Yummy',
        food: ["Burgers, obviously", "lettuce and kale.. nah just kidding!"]
    }
};
*/


const beers = (state = {}, action) => {
    switch (action.type) {

        //   G E T    B E E R
        case actionType.getBeer:
            return {...state, [action.id]: {
                id: action.id,
                isLoading: false,
                hasErrored: false,
                name: '',
                food: []
            }};

        //   L O A D I N G
        case actionType.loading:
            return {...state, [action.id]: {
                ...state[action.id],
                isLoading: action.isLoading
            }};

        //   E R R O R E D
        case actionType.errored:
            return {...state, [action.id]: {
                ...state[action.id],
                hasErrored: action.hasErrored
            }};

        //   S E T    N A M E
        case actionType.setName:
            return {...state, [action.id]: {
                ...state[action.id],
                name: action.name
            }};

        //   S E T    F O O D
        case actionType.setFood:
            return {...state, [action.id]: {
                ...state[action.id],
                food: action.food
            }};

        default:
            return state;
    }
};


export default beers;
