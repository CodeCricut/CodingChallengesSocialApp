import React from "react";
import * as Material from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CommentStyle from "../styles/CommentStyle";
import { Link } from "react-router-dom";

const Comment = ({ classes, ...props }) => {
    return (
        <div className={classes.root}>
            <div className="comment-meta">
                <Link to={`/users/User_with_a_name`} className="username">
                    User with a name
                </Link>
                <span>•</span>
                <span className="comment-age">6 months ago</span>
            </div>
            <div className="comment-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti, nostrum explicabo? Cum rem animi dolor! Iure alias
                quisquam ad esse qui eligendi voluptatibus quod voluptates
                consequuntur pariatur, commodi animi rerum.
            </div>
        </div>
    );
};

export default withStyles(CommentStyle)(Comment);
