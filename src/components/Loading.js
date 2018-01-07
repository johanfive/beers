import React from 'react';
import { connect } from 'react-redux';
//______________________________________________________________________________


const Loading = ({isLoading}) => {
    return isLoading ? <span>Loading...</span> : null;
};


const mapStateToProps = (state, {glassId}) => ({
    isLoading: state.glasses.byId[glassId].status.isLoading
});

export default connect(mapStateToProps)(Loading);
