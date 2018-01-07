import { actionType } from '../constants';
//______________________________________________________________________________

const initStatus = {
    isLoading: false,
    hasErrored: false
};


const status = (state = initStatus, action) => {
    switch (action.type) {
        case actionType.loading:
            return {...state, isLoading: action.isLoading};
        case actionType.errored:
            return {...state, hasErrored: action.hasErrored};
        default:
            return state;
    }
};

export default status;
