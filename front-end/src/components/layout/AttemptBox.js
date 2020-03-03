import React from "react";
import * as Material from "@material-ui/core";
import MaterialSubmitField from "../MaterialSubmitField";
import { FormControl, InputLabel, Select, Grid } from "@material-ui/core";
import MaterialSortSelect from "./../MaterialSortSelect";
import Attempt from "../Attempt";
const CommentBox = props => {
    return (
        <div>
            <h2>Prompt attempts</h2>
            <MaterialSubmitField
                helperText="Submit the link to your attempt (must be a public GitHub repository)"
                buttonText="Share your attempt"
            />
            <MaterialSortSelect align="right" />
            <Material.Grid container className="">
                <Attempt />
                <Attempt />
                <Attempt />
                <Attempt />
            </Material.Grid>
        </div>
    );
};

export default CommentBox;
