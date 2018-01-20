import axios from 'axios';
import * as actionType from './constants';
import { v4 } from 'uuid';
//______________________________________________________________________________


// Mount an empty component that will trigger a request for data to the back-end
export const getAGlass = () => ({
    type: actionType.GET_GLASS,
    glassId: v4()
});

// Ongoing request, show spinner
export const searchingTheFridge = (boolean, glassId) => ({
    type: actionType.LOADING,
    isLoading: boolean,
    glassId
});

// Error occured during request
export const bartenderMessedUp = (boolean, glassId) => ({
    type: actionType.ERRORED,
    hasErrored: boolean,
    glassId
});

// Unmount the component that was supposed to receive the data on success
export const clearGlass = (glassId) => ({
    type: actionType.CLEAR_GLASS,
    glassId
});

// Toggle the liked status of a Beer.
export const love = (beerId) => ({
    type: actionType.TOGGLE_FAVORITE,
    beerId
});

// Data Fetch Success, add data to the redux store
export const pour = (beer, glassId) => ({
    type: actionType.ADD_BEER_TO_REDUX_STORE,
    beer,
    glassId
});



// Returns a function with dispatch as an argument instead of just 1 action
export const getBeerFromFridge = (url, glassId) => {
    return dispatch => {
        // Display a spinner to show a request is ongoing.
        dispatch(searchingTheFridge(true, glassId));
        // Actually start the request
        // See documentation at https://github.com/axios/axios
        axios.get(url)
        // Fetch data S U C C E S S
        .then( response => {
            // Response is not empty
            if (response.data && response.data.length) {
                const beer = {
                    id: response.data[0].id,
                    name: response.data[0].name,
                    food: response.data[0].food_pairing,
                };
                dispatch(pour(beer, glassId));
            } else {
                // Data is empty. Eg: search matches no result.
                // this is now "deducted" by the component. No need to dispatch anything.
                // Keeping the state to its minimal representation.
            }
            // Stop displaying a spinner
            dispatch(searchingTheFridge(false, glassId));
        })
        .catch( error => {
            if (error.response) {
                // The request was made and the server responded
                // with a status code that falls out of the range of 2xx
                console.log(error.response.data.data[0].msg);
            } else {
                console.log(error);
            }
            // Regardless of the error
            // Stop the spinner
            dispatch(searchingTheFridge(false, glassId));
            // pop up an error message that disappears after a couple seconds
            dispatch(bartenderMessedUp(true, glassId));
            setTimeout(
                () => {
                    dispatch(bartenderMessedUp(false, glassId));
                    // Unmount component supposed to receive data on success
                    dispatch(clearGlass(glassId));
                },
                2000
            );
        });
    };
};
