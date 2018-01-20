import React from 'react';
import { connect } from 'react-redux';
import { hasErrored } from '../selectors';
//______________________________________________________________________________


const Error = ({hasErrored}) => {
    return hasErrored ? <p>Data did not load, try again.</p> : null;
};


const mapStateToProps = (state, {glassId}) => ({
    hasErrored: hasErrored(state, glassId)
});

export default connect(mapStateToProps)(Error);
