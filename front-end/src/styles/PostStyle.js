const styles = theme => ({
    root: {
        "& .post-title": {
            marginBottom: "1rem"
        },
        "& .post-description": {
            lineHeight: "1.5rem"
        },
        "& .tag-group": {
            margin: "20px 40px"
        },
        "& .button-bar": {
            display: "flex",
            justifyContent: "space-between"
        },
        "& .bar-button": {
            flexGrow: 0.2
        }
    }
});

export default styles;
