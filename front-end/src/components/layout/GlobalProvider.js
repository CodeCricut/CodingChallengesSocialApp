import React from "react";
import { Provider } from "react-redux";
import store from "../../actions/store";
import { ToastProvider } from "react-toast-notifications";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardBox from "./CardBox";

const GlobalProvider = props => {
    return (
        <Provider store={store}>
            <Router>
                <ToastProvider autoDismiss={true}>
                    {props.children}
                </ToastProvider>
            </Router>
        </Provider>
    );
};

export default GlobalProvider;
