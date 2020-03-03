import React from "react";
import * as Material from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PostStyle from "../../styles/PostStyle";
import CommentBox from "../layout/CommentBox";
import AttemptBox from "../layout/AttemptBox";

const Post = ({ classes, ...props }) => {
    return (
        <div className={classes.root}>
            <Material.Grid container>
                <Material.Grid item xs={9}>
                    <h2 className="post-title">Post Title</h2>
                    <p className="post-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Cum porro ad quae eum rerum nisi illo provident,
                        laudantium consectetur facilis. Quasi minima commodi
                        reiciendis doloribus placeat dolores deserunt, pariatur
                        atque.
                    </p>
                </Material.Grid>
                <Material.Grid item xs={3}>
                    <Material.ButtonGroup
                        color="default"
                        orientation="vertical"
                        variant="contained"
                        className="tag-group"
                    >
                        <Material.Button>Tag 1</Material.Button>
                        <Material.Button>Another tag 2</Material.Button>
                        <Material.Button>3</Material.Button>
                    </Material.ButtonGroup>
                </Material.Grid>
            </Material.Grid>
            <Material.Grid container>
                <Material.Grid item xs={9} className="button-bar">
                    <Material.Button
                        color="primary"
                        size="large"
                        variant="contained"
                        className="bar-button"
                    >
                        Submit attempt
                    </Material.Button>
                    <Material.Button
                        size="large"
                        variant="contained"
                        className="bar-button"
                    >
                        View others' attempts
                    </Material.Button>
                    <Material.Button
                        size="large"
                        variant="contained"
                        className="bar-button"
                    >
                        Share
                    </Material.Button>
                </Material.Grid>
            </Material.Grid>
            <CommentBox />
            <AttemptBox />
        </div>
    );
};

export default withStyles(PostStyle)(Post);
