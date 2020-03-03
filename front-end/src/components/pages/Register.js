import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";
import RegisterStyle from "../../styles/RegisterStyle";

const Register = ({ classes, ...props }) => {
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={8}>
                    <div className="offset">
                        <h2>Register</h2>
                        <TextField fullWidth label="Username" />
                        <TextField fullWidth label="Password" type="password" />
                        <TextField
                            fullWidth
                            multiline
                            label="Tell us about yourself (public description)"
                        />
                        <div className="button-container">
                            <Button variant="contained">Cancel</Button>
                            <Button variant="contained" color="primary">
                                Register
                            </Button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div className="offset register-help">
                        <p>
                            Once you register, you gain the ability to create
                            prompts, comment on posts, or post your own
                            implementation to community posts.
                        </p>
                        <p>
                            We will never sell your information to third
                            parties.
                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default withStyles(RegisterStyle)(Register);
