import React from "react";
import * as Material from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AttemptStyle from "../styles/AttemptStyle";
import { Link } from "react-router-dom";

const Attempt = ({ classes, ...props }) => {
    return (
        <Material.Grid item xs={12} sm={6} className={classes.root}>
            <Material.Paper variant="outlined" className="attempt-card">
                <a
                    href={`https://github.com/CodeCricut`}
                    className="attempt-title"
                >
                    Attempt Title
                </a>
                <div className="attempt-meta">
                    <span>
                        By <Link to="/author">Author</Link>
                    </span>
                </div>
                <p className="attempt-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Libero doloremque doloribus sint, aut quas, maxime totam
                    repellat quisquam quasi delectus nam eaque ab
                    necessitatibus, consequatur dolorum ea nemo a est!
                </p>
            </Material.Paper>
        </Material.Grid>
    );
};

export default withStyles(AttemptStyle)(Attempt);
