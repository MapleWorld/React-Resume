import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './ui/containers/index';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './presentation/reducers/index';
import { StoreState } from './infrastructure/types';


//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

import { EnthusiasmAction } from './presentation/actions/index';
import './css/style.css';



const store = createStore <StoreState, EnthusiasmAction, any, any> (enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

ReactDOM.render(
    <Provider store={store}>
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Ou Ye</title>
            <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"/>
            <link href='http://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'/>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/js/tooltip.js"/>
            <link rel="stylesheet" href="./css/style.css"/>
            <link rel="shortcut icon" href="./img/logo.jpg"/>
        </div>
        <Home/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);