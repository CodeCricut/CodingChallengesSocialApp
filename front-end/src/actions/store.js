import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import { reducers } from "./../reducers/index";

const store = createStore(
    // reducers
    () => {},
    // middleware
    compose(
        applyMiddleware(thunk),
        // Debugging in chrome
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
