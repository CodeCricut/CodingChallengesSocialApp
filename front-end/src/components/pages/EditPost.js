import React from "react";

import { Grid, TextField, ButtonGroup, Button } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";
import EditPostStyle from "../../styles/EditPostStyles";
import MaterialSubmitField from "../MaterialSubmitField";

const EditPost = ({ classes, ...props }) => {
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={9}>
                    <div className="offset">
                        <h2>Create/edit a post</h2>
                        <TextField
                            label="Title"
                            variant="outlined"
                            fullWidth
                            className="input"
                            size="small"
                        />
                        <TextField
                            multiline
                            label="Text (optional)"
                            variant="outlined"
                            fullWidth
                            className="input"
                        />
                        <MaterialSubmitField
                            helperText="Add tag..."
                            buttonText="Add"
                        />
                        <div className="post-button-container">
                            <Button variant="contained" color="primary">
                                Post
                            </Button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <div className="offset">
                        <p className="prompt-help">
                            Please provide all of the details neccessary for
                            someone to implement your challenge. You should
                            include the technologies and any limitations that
                            your project includes.
                        </p>
                    </div>
                    <div className="tag-group-head">Press tag to delete</div>
                    <ButtonGroup
                        color="default"
                        orientation="vertical"
                        variant="contained"
                        className="tag-group"
                    >
                        <Button>Tag 1</Button>
                        <Button>Another tag 2</Button>
                        <Button>3</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </div>
    );
};

export default withStyles(EditPostStyle)(EditPost);
