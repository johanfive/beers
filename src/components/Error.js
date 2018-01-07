import React from 'react';
import { connect } from 'react-redux';
//______________________________________________________________________________


const Error = ({hasErrored}) => {
    return hasErrored ? <p>Data did not load, try again.</p> : null;
};


const mapStateToProps = (state, {glassId}) => ({
    hasErrored: state.glasses.byId[glassId].status.hasErrored
});

export default connect(mapStateToProps)(Error);
