import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import quests from "./reducers/quests";
import App from "./components/App";

const store = createStore(quests, window.devToolsExtension ? window.devToolsExtension() : undefined);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('questGuide')
)

