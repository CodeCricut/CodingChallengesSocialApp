import React from "react";
import * as Material from "@material-ui/core";
import { ArrowUpwardSharp, ArrowDownwardSharp } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import CardBoxStyle from "../../styles/CardBoxStyle";

const CardBox = ({ classes, ...props }) => {
    return (
        <Material.Paper elevation={2} className={classes.root}>
            <Material.Grid container className="post-container">
                <Material.Grid item xs={12} md={6}>
                    <h2 className="post-title">Post Title</h2>

                    <div>
                        <Material.Button
                            variant="outlined"
                            className="margined-button"
                        >
                            Tag Button
                        </Material.Button>
                        <Material.Button
                            variant="outlined"
                            className="margined-button"
                        >
                            Tag Button 1
                        </Material.Button>
                    </div>
                    <Material.Button className="arrow-button">
                        <ArrowDownwardSharp color="secondary" />
                    </Material.Button>
                    <span className="post-karma">12.1k</span>
                    <Material.Button className="arrow-button">
                        <ArrowUpwardSharp color="primary" />
                    </Material.Button>
                    <div className="post-meta">Posted: 11 PM, 21 December</div>
                </Material.Grid>
                <Material.Grid item xs={12} md={6}>
                    <p className="post-short-description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Molestias nihil ipsum reiciendis quo repudiandae
                        corrupti ut? Labore rem error id saepe dolores
                        repudiandae deleniti consequuntur magnam in, cumque,
                        vitae deserunt!
                    </p>
                    <Material.Button variant="contained" color="primary">
                        Comments
                    </Material.Button>
                </Material.Grid>
            </Material.Grid>
        </Material.Paper>
    );
};

export default withStyles(CardBoxStyle)(CardBox);
