import React from 'react';
import ReactDOM from 'react-dom';
import Home from './ui/containers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './presentation/reducers/index';
import { StoreState } from './infrastructure/types';
import { EnthusiasmAction } from './presentation/actions/index';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

const store = createStore < StoreState, EnthusiasmAction, any, any > (
    enthusiasm, 
    {
        enthusiasmLevel: 1,
        languageName: 'TypeScript',
    }
);

render(
    <BrowserRouter>
        <Provider store={store}>
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Ou Ye</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="stylesheet" href="./css/bootstrap.min.css"/>
                <link rel="stylesheet" href="./css/style.css"/>
                <link rel='stylesheet' href='./css/googleFonts.css'/>
                <link rel="shortcut icon" href="./img/favicon.png"/>
                <script type="text/javascript" src="./js/jquery.js"/>
                <script type="text/javascript" src="./js/tooltip.js"/>
                <script type="text/javascript" src="./js/three.min.js"/>
                
                <link href="./css/main.css" rel="stylesheet" type="text/css" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.css" rel="stylesheet" type="text/css" />
                {/* Empty */}
            </div>
            <Home/>
        </Provider>,
    </BrowserRouter>,
    document.querySelector('#root')
)