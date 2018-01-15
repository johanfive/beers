import axios from 'axios';
import { ROOT_URI } from '../../../constants';
import * as actionType from '../../../constants';
//______________________________________________________________________________



export const askForRecommendations = (searchWord, page) => {
    console.log("askForRecommendations is called");
    return dispatch => {
        dispatch(requestRecommendations());

        axios.get(`${ROOT_URI}/beers?food=${searchWord}&page=${page}&per_page=6`)

        .then(response => {
            let recommendations = {
                toShow: [],
                onNextPage: ''
            };
            let counter = 0;
            response.data.forEach(
                item => {
                    const beer = {
                        id: item.id,
                        name: item.name,
                        food: item.food_pairing,
                    };
                    dispatch(addBeerToReduxStore(beer));
                    counter++;
                    if (counter < 6) {recommendations.toShow.push(beer.id);}
                    else {recommendations.onNextPage = beer.id;}
                }
            );
            dispatch(receiveRecommendations(recommendations));
        })

        .catch(error => {
            console.log(error);
            dispatch(failedRecommendations());
        });
    }
};





export const requestRecommendations = () => ({
    type: actionType.REQUEST_RECOMMENDATIONS
});



export const addBeerToReduxStore = beer => ({
    type: actionType.ADD_BEER_TO_REDUX_STORE,
    beer // beer object has 3 properties: id (INT), name (STRING), food (ARRAY)
});



export const receiveRecommendations = recommendations => ({
    type: actionType.RECEIVE_RECOMMENDATIONS,
    recToShow: recommendations.toShow, // array of INTs
    recOnNextPage: recommendations.onNextPage // INT
});



export const failedRecommendations = () => ({
    type: actionType.FAILREQ_RECOMMENDATIONS
});
