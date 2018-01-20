import React from 'react';
import { connect } from 'react-redux';
import { getAllGlasses } from '../selectors';
import Glass from './Glass';
//______________________________________________________________________________


const BarCounter = ({glasses}) => (
    glasses.map(glassId => <Glass key={glassId} glassId={glassId} />)
);


const mapStateToProps = state => ({
    glasses: getAllGlasses(state)
});


export default connect(mapStateToProps)(BarCounter);
