import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
//______________________________________________________________________________


const main = (
    <Provider store={store}>
        <App />
    </Provider>
);


ReactDOM.render(main, document.getElementById('root'));
registerServiceWorker();
