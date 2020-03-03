import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AboutStyle from "../../styles/AboutStyle";

const About = ({ classes, ...props }) => {
    return (
        <div className={classes.root}>
            <h1>About</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur dolorem incidunt odit, quidem quaerat omnis quod
                est voluptates dolores reprehenderit totam dicta aspernatur
                sint, nemo asperiores voluptas repellendus, ad error.
            </p>
            <h2>Lorem Ipsum</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit reprehenderit tenetur molestiae esse eaque ab natus
                totam fugiat laudantium dolorum officiis accusamus debitis
                facilis quam magni in, quas omnis facere.
            </p>
            <h2>Lorem Ipsum</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit reprehenderit tenetur molestiae esse eaque ab natus
                totam fugiat laudantium dolorum officiis accusamus debitis
                facilis quam magni in, quas omnis facere.
            </p>
        </div>
    );
};

export default withStyles(AboutStyle)(About);
