import React, { useEffect, useState } from "react";
import * as Material from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CommentBoxStyle from "../../styles/CommentBoxStyle";
import MaterialSubmitField from "../MaterialSubmitField";
import Comment from "../Comment";
import MaterialSortSelect from "./../MaterialSortSelect";

import { FormControl, InputLabel, Select } from "@material-ui/core";
const CommentBox = ({ classes, ...props }) => {
    return (
        <div className={classes.root}>
            <Material.Grid container className="comment-container">
                <MaterialSubmitField
                    helperText="Comment on this post..."
                    buttonText="Submit"
                />

                <MaterialSortSelect align="right" />

                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </Material.Grid>
        </div>
    );
};

export default withStyles(CommentBoxStyle)(CommentBox);
