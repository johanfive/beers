import React from 'react';
import { connect } from 'react-redux';
import { getFoodPairings } from '../selectors';
//______________________________________________________________________________


const Food = ({food}) => {
    // This is using the map index as key
    // it's considered bad practice but in this scenario it's rather safe
    // Besides, the payload received from the back-end is only an array of strings.
    const foodItems = food.map((item, i) => <li key={i}>{item}</li>);
    return <ul>{foodItems}</ul>;
};


const mapStateToProps = (state, {id}) => ({
    food: getFoodPairings(state, id)
});

export default connect(mapStateToProps)(Food);
