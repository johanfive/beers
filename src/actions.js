import axios from 'axios';
import { actionType } from './constants';
import { v4 } from 'uuid';
//______________________________________________________________________________


export const getAGlass = () => ({
    type: actionType.getGlass,
    glassId: v4()
});


export const searchingTheFridge = (boolean, glassId) => ({
    type: actionType.loading,
    isLoading: boolean,
    glassId
});


export const bartenderMessedUp = (boolean, glassId) => ({
    type: actionType.errored,
    hasErrored: boolean,
    glassId
});


export const clearGlass = (glassId) => ({
    type: actionType.clearGlass,
    glassId
});


export const pour = (beer, glassId) => ({
    type: actionType.pour,
    beer,
    glassId
});



export const getBeerFromFridge = (url, glassId) => {
    return dispatch => {

        dispatch(searchingTheFridge(true, glassId));

        axios.get(url)
             .then( response => {
                const beer = {
                    id: response.data[0].id,
                    name: response.data[0].name,
                    food: response.data[0].food_pairing,
                }
                dispatch(searchingTheFridge(false, glassId));
                dispatch(pour(beer, glassId));
             })
             .catch( error => {
                console.log(error);
                dispatch(searchingTheFridge(false, glassId));
                dispatch(bartenderMessedUp(true, glassId));
                setTimeout( () => {
                    dispatch(bartenderMessedUp(false, glassId));
                    dispatch(clearGlass(glassId))},
                    3500
                );
             });
    };
};


export const love = (beerId) => ({
    type: actionType.toggleFavorite,
    beerId
});
