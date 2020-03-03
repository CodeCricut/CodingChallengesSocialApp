import React from "react";
import * as Material from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MaterialSortSelectStyle from "../styles/MaterialSortSelectStyle";

const MaterialSortSelect = ({ classes, align }) => {
    return (
        <div style={{ width: "100%" }}>
            <div className={classes.root}>
                <div className={align ? align : "left"}>
                    <Material.InputLabel>
                        <Material.InputLabel htmlFor="age-native-helper">
                            Sort
                        </Material.InputLabel>
                        <Material.NativeSelect>
                            <option value="" />
                            <option value={"New"}>New</option>
                            <option value={"Old"}>Old</option>
                            <option value={"Popular"}>Popular</option>
                        </Material.NativeSelect>
                    </Material.InputLabel>
                </div>
            </div>
        </div>
    );
};

export default withStyles(MaterialSortSelectStyle)(MaterialSortSelect);
