import axios from 'axios';
//______________________________________________________________________________



let uniqueId = 0;
export const pourBeer = () => ({
    type: 'GET_BEER',
    id: 'Beer'+uniqueId++
});



export const isLoading = (id, boolean) => ({
    type: 'LOADING',
    isLoading: boolean,
    id
});



export const hasErrored = (id, boolean) => ({
    type: 'ERRORED',
    hasErrored: boolean,
    id
});



export const setName = (id, name) => ({
    type: 'SET_NAME',
    name,
    id
});



export const setFood = (id, arrayOfFood) => ({
    type: 'SET_FOOD',
    food: arrayOfFood,
    id
});



export const getMeABeer = (url, id) => {
    return dispatch => {

        dispatch(isLoading(id, true));

        axios.get(url)
             .then( response => {
                 dispatch(setName(id, response.data[0].name));
                 dispatch(setFood(id, response.data[0].food_pairing));
                 dispatch(isLoading(id, false));
             })
             .catch( error => {
                 console.log(error);
                 dispatch(isLoading(id, false));
                 dispatch(hasErrored(id, true));
                 setTimeout( () => dispatch(hasErrored(id, false)), 5000 );
             });
    };
};
