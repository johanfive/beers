import React from 'react';
import { connect } from 'react-redux';
import { getNameOf } from '../selectors';
//______________________________________________________________________________


const Name = ({name}) => <h2>{name}</h2>;


const mapStateToProps = (state, {id}) => ({
    name: getNameOf(state, id)
});

export default connect(mapStateToProps)(Name);
