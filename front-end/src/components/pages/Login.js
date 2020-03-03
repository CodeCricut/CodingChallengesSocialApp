import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";
import LoginStyle from "../../styles/RegisterStyle";

const Login = ({ classes, ...props }) => {
    return (
        <div className={classes.root}>
            <div className="offset-absolute offset">
                <h2>Login</h2>
                <TextField fullWidth label="Username" />
                <TextField fullWidth label="Password" type="password" />
                <div className="button-container">
                    <Button variant="contained" color="primary">
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default withStyles(LoginStyle)(Login);
