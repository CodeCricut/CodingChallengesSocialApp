import React from "react";
import GlobalProvider from "./components/layout/GlobalProvider";
import { Switch, Route, Redirect } from "react-router-dom";
import Posts from "./components/pages/Posts";
import CommentBox from "./components/layout/CommentBox";
import { Container } from "@material-ui/core";
import CardBox from "./components/layout/CardBox";
import Post from "./components/pages/Post";
import AttemptBox from "./components/layout/AttemptBox";
import Attempt from "./components/Attempt";
import User from "./components/pages/User";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import EditPost from "./components/pages/EditPost";
import DeletePost from "./components/pages/DeletePost";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Help from "./components/pages/Help";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
    return (
        <GlobalProvider>
            <Container maxWidth="md">
                <Navbar />
                <Switch>
                    <Route
                        exact
                        path="/testing/commentbox"
                        component={CommentBox}
                    />
                    <Route exact path="/testing/post" component={Post} />
                    <Route
                        exact
                        path="/testing/attemptbox"
                        component={AttemptBox}
                    />
                    <Route
                        exact
                        path="/testing/attemptcomp"
                        component={Attempt}
                    />
                    <Route
                        exact
                        path="/testing/editpost"
                        component={EditPost}
                    />
                    <Route
                        exact
                        path="/testing/deletepost"
                        component={DeletePost}
                    />
                    <Route exact path="/testing/footer" component={Footer} />
                    <Route exact path="/testing/Navbar" component={Navbar} />

                    <Route exact path="/user" component={User} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/help" component={Help} />
                    <Route exact path="/create" component={EditPost} />
                    <Route exact path="/posts" component={Posts} />

                    {/* Catch all */}
                    <Route component={Posts} />
                    {/* <Route exact path="/featured">
                        Featured
                    </Route>
                    <Route exact path="/post/:postId">
                        View a post
                    </Route>
                    <Route exact path="/users">
                        Users
                    </Route>
                    <Route exact path="/register">
                        register
                    </Route>
                    <Route exact path="/login">
                        login
                    </Route>
                    <Route exact path="/logout">
                        logout
                    </Route>
                    <Route exact path="/create">
                        create
                    </Route>
                    <Route exact path="/edit/:postId">
                        edit/:postId
                    </Route>
                    <Route exact path="/delete/:postId">
                        delete/:postId
                    </Route>
                    <Route exact path="/about">
                        about
                    </Route>
                    <Route exact path="/help">
                        help
                    </Route>
                    <Route exact path="/contact">
                        contact
                    </Route> */}
                </Switch>
                <Footer />
            </Container>
        </GlobalProvider>
    );
}

export default App;
