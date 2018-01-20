import React from 'react';
import { connect } from 'react-redux';
import { beerInGlassIsLoading, isSearching } from '../selectors';
//______________________________________________________________________________


const Loading = ({isLoading, children}) => {
    return isLoading ? <span>L O A D I N G...</span> : children || null;
};


const mapStateToProps = (state, {glassId}) => {
    if (glassId) {
        return {isLoading: beerInGlassIsLoading(state, glassId)};
    } else {
        return {isLoading: isSearching(state)};
    }
};

export default connect(mapStateToProps)(Loading);
