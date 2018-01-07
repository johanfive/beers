import React from 'react';
import { connect } from 'react-redux';
//______________________________________________________________________________


const Name = ({name}) => <h2>{name}</h2>;


const mapStateToProps = (state, {id}) => ({
    name: state.beers.byId[id].name
});

export default connect(mapStateToProps)(Name);
