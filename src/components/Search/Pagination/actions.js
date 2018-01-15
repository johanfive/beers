import * as actionType from '../../../constants';
//______________________________________________________________________________



export const increment = () => ({
    type: actionType.INCR_CURR_PAGE
});



export const decrement = () => ({
    type: actionType.DECR_CURR_PAGE
});
