import React from "react";
import * as Material from "@material-ui/core";
const MaterialSubmitField = props => {
    return (
        <Material.FormControl fullWidth>
            <Material.InputLabel htmlFor="standard-adornment-password">
                {props.helperText}
            </Material.InputLabel>
            <Material.Input
                multiline
                endAdornment={
                    <Material.InputAdornment position="end">
                        <Material.Button variant="text" color="primary">
                            {props.buttonText}
                        </Material.Button>
                    </Material.InputAdornment>
                }
            />
        </Material.FormControl>
    );
};

export default MaterialSubmitField;
