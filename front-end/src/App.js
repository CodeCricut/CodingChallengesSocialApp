import React from "react";
import GlobalProvider from "./components/layout/GlobalProvider";
import { Switch, Route } from "react-router-dom";
import Posts from "./components/posts/Posts";

function App() {
    return (
        <GlobalProvider>
            <Switch>
                <Route path="/featured">Featured</Route>
                <Route path="/post/:postId">View a post</Route>
                <Route path="/users">Users</Route>
                <Route path="/register">register</Route>
                <Route path="/login">login</Route>
                <Route path="/logout">logout</Route>
                <Route path="/create">create</Route>
                <Route path="/edit/:postId">edit/:postId</Route>
                <Route path="/delete/:postId">delete/:postId</Route>
                <Route path="/about">about</Route>
                <Route path="/help">help</Route>
                <Route path="/contact">contact</Route>
                <Route path="/">
                    <Posts />
                </Route>
            </Switch>
        </GlobalProvider>
    );
}

export default App;
