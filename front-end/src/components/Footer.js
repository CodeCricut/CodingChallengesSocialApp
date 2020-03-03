import React from "react";
import { Grid } from "@material-ui/core";
import Link from "react-router-dom/Link";

import { withStyles } from "@material-ui/core/styles";
import FooterStyle from "../styles/FooterStyle";

const Footer = ({ classes, ...props }) => {
    return (
        <div className={classes.root}>
            <hr className="mt-5" />
            <Grid container>
                <Grid item xs={4}>
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>

                        <li>
                            <Link to="/help">Help</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={8}>
                    <p className="lead">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eligendi, veniam amet similique, aspernatur id
                        delectus vero quis impedit corrupti, repellendus
                        dolorum. Consequatur, cum? Maxime facilis ad quo
                        laudantium, dolorum quia.
                    </p>
                </Grid>
            </Grid>
        </div>
    );
};

export default withStyles(FooterStyle)(Footer);
