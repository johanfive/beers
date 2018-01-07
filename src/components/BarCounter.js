import React from 'react';
import { connect } from 'react-redux';
import Glass from './Glass';
//______________________________________________________________________________


const BarCounter = ({glasses}) => (
    glasses.map(glassId => <Glass key={glassId} glassId={glassId} />)
);


const mapStateToProps = state => ({
    glasses: state.glasses.allIds
});


export default connect(mapStateToProps)(BarCounter);
