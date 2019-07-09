import React from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MealReducer from './reducers/meal';
// import AdminMenuReducer from './reducers/adminMenu';
// import OrderReducer from './reducers/order';
import './index.css';
import './vendors/ionicons-2.0.1/css/ionicons.min.css';
import './vendors/fonts/font-awesome.min.css';
// import Menu from './components/admin/menu/AdminMenu';
// import SetUpMeal from './components/admin/MealSetup/SetUpMeal';
// import UserOrder from './components/userorder/UserOrder';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
    MealReducer
);

ReactDOM.render(
    <Provider store ={store}>
       <App />
    </Provider>,
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
