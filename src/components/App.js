import React from 'react';
import './App.css';
import Bartender from './Bartender';
import BarCounter from './BarCounter';
//______________________________________________________________________________


const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Beers</h1>
            </header>
            <Bartender />
            <BarCounter />
        </div>
    );
};

export default App;
