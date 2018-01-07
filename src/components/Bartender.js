import React from 'react';
import { connect } from 'react-redux';
import { getAGlass } from '../actions';
//______________________________________________________________________________


const Bartender = ({askYourServer}) => (
    <button onClick={askYourServer}>Get Beer!</button>
);


const mapDispatchToProps = dispatch => ({
    askYourServer: () => dispatch(getAGlass())
});

export default connect(null, mapDispatchToProps)(Bartender);
