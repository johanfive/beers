import React from 'react';
import './App.css';
import Bartender from './Bartender';
import BarCounter from './BarCounter';
import Favorites from './Favorites';
//______________________________________________________________________________


const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Beers</h1>
            </header>
            <Bartender />
            <BarCounter />
            <Favorites />
        </div>
    );
};

export default App;
