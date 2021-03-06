import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'semantic-ui-css/semantic.min.css'
import "mdbreact/dist/css/mdb.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css"; 
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import Reducers from './redux/reducer'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';

const store=createStore(Reducers,{},applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
