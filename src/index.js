import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App";
import reducers from "./reducers";

const root = ReactDOM.createRoot(document.getElementById('root'));

// We use Provider component to connect our React app with Redux
// Provider gets one prop - our Redux store

root.render((
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
));
