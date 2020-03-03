const styles = theme => ({
    root: {
        "& .button-container": {
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px",
            width: "100%",
            padding: 0
        },
        "& .button-container button": {
            marginLeft: "10px"
        }
    }
});

export default styles;
