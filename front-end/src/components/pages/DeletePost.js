import React from "react";

import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import DeletePostStyle from "../../styles/DeletePostStyle";

import CardBox from "../layout/CardBox";

const DeletePost = ({ classes, ...props }) => {
    return (
        <div className={classes.root}>
            <h2>Confirm deletion</h2>
            <p>
                Would you really like to delete this post? Once you delete a
                post, it cannot be recovered.
            </p>
            <CardBox />
            <div className="button-container">
                <Button variant="contained">Cancel</Button>
                <Button variant="contained" color="secondary">
                    Confirm Deletion
                </Button>
            </div>
        </div>
    );
};

export default withStyles(DeletePostStyle)(DeletePost);
