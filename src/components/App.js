import React from 'react';
import './App.css';
import Bartender from './Bartender';
import BarCounter from './BarCounter';
import Favorites from './Favorites';
import FavCounter from './FavCounter';
import Search from './Search/';
//______________________________________________________________________________


const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <FavCounter />
                <h1 className="App-title">Beers</h1>
            </header>
            <Bartender />
            <BarCounter />
            <Favorites />
            <Search />
        </div>
    );
};

export default App;
