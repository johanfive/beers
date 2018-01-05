import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Beer from './Beer';
import { pourBeer } from './actions';
//______________________________________________________________________________


const App = ({beers, getBeers}) => {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Beers</h1>
            </header>
            <button onClick={() => getBeers()}>Get beer!</button>
            {beers.map(beerId => <Beer key={beerId} id={beerId} />)}
        </div>
    );
};


const mapStateToProps = state => ({
    beers: state.ids
});


const mapDispatchToProps = dispatch => ({
    getBeers: () => dispatch(pourBeer())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
