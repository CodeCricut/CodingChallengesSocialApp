const styles = theme => ({
    root: {
        "& .offset": {
            margin: "5px",
            backgroundColor: "#eee",
            borderRadius: "4px",
            padding: "10px"
        },
        "& .offset h2": {
            margin: "10px 0",
            color: "#222"
        },
        "& .input": {
            margin: "5px 0",
            border: "1 px solid red"
        },
        "& .prompt-help": {
            color: "#666",
            fontSize: ".8rem",
            lineHeight: "1.2rem"
        },
        "& .tag-group": {
            display: "flex",
            flexBasis: "1",
            margin: "10px 5px"
        },
        "& .tag-group .MuiButton-contained": {
            backgroundColor: "#eee",
            color: "#666"
        },
        "& .tag-group-head": {
            margin: "20px 0 0 5px",
            color: "#666",
            fontSize: ".8rem"
        },
        "& .post-button-container": {
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px",
            width: "100%",
            padding: 0
        }
    }
});

export default styles;
