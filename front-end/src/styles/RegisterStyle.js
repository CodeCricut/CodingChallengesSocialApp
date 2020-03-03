const styles = theme => ({
    root: {
        "& .offset": {
            margin: "5px",
            backgroundColor: "#eee",
            borderRadius: "4px",
            padding: "10px"
        },
        "& .offset-absolute": {
            width: "67%",
            margin: "5px auto"
        },
        "& .offset h2": {
            margin: "10px 0",
            color: "#222"
        },
        "& .button-container": {
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px",
            width: "100%",
            padding: 0
        },
        "& .button-container button": {
            marginLeft: "10px"
        },
        "& .register-help": {
            color: "#666",
            fontSize: ".8rem",
            lineHeight: "1.2rem"
        }
    }
});

export default styles;
