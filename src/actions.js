import axios from 'axios';
import { actionType } from './constants';
import { v4 } from 'uuid';
//______________________________________________________________________________


// Mount an empty component that will trigger a request for data to the back-end
export const getAGlass = () => ({
    type: actionType.getGlass,
    glassId: v4()
});

// Ongoing request, show spinner
export const searchingTheFridge = (boolean, glassId) => ({
    type: actionType.loading,
    isLoading: boolean,
    glassId
});

// Error occured during request
export const bartenderMessedUp = (boolean, glassId) => ({
    type: actionType.errored,
    hasErrored: boolean,
    glassId
});

// Unmount the component that was supposed to receive the data on success
export const clearGlass = (glassId) => ({
    type: actionType.clearGlass,
    glassId
});

// Toggle the liked status of a Beer.
export const love = (beerId) => ({
    type: actionType.toggleFavorite,
    beerId
});

// Data Fetch Success, add data to the redux store
export const pour = (beer, glassId) => ({
    type: actionType.pour,
    beer,
    glassId
});

// No search result
export const nope = () => ({
    type: "NOPE"
});


// Thunk. Function that returns a function with dispatch as an argument instead of just 1 action
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
                // When the response contains multiple items:
                response.data.forEach(
                    item => {
                        const beer = {
                            id: item.id,
                            name: item.name,
                            food: item.food_pairing,
                        };
                        // push the data received to the Redux store
                        dispatch(pour(beer, glassId));
                    }
                );
            } else {
                // data is empty. Eg: search matches no result.
                dispatch(nope());
            }
            // Stop displaying a spinner
            dispatch(searchingTheFridge(false, glassId));
        })
        .catch( error => {
            if (error.response) {
                // The request was made and the server responded
                // with a status code that falls out of the range of 2xx
                dispatch(nope()); // ok for a 400 but will need to think of something for a 404
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
