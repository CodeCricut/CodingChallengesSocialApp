import React from "react";

import { Grid, Paper } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";
import UserStyle from "../../styles/User";

import Attempt from "../Attempt";

const User = ({ classes, ...props }) => {
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={6} className="profile-container">
                    <Paper>
                        <img
                            src="https://am22.akamaized.net/tms/cnt/uploads/2019/05/DannyDeVito-1200x799.jpg"
                            className="profile-picture"
                        />
                        <h3 className="username">Username</h3>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} className="profile-meta">
                    <h3 className="description-header">About me</h3>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. At quasi nulla inventore! Deleniti placeat,
                        dolorem voluptatibus voluptas nobis, unde rerum nulla
                        praesentium possimus id molestias et debitis. Molestiae,
                        quo veritatis.
                    </p>
                </Grid>
            </Grid>
            <Grid container>
                <Attempt />
                <Attempt />
                <Attempt />
                <Attempt />
                <Attempt />
            </Grid>
        </div>
    );
};

export default withStyles(UserStyle)(User);
