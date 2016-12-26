import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import quests from "./reducers/quests";
import App from "./components/App";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(quests, composeEnhancers(applyMiddleware(thunkMiddleware, createLogger())));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('questGuide')
)



