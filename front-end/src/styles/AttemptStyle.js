const styles = theme => ({
    root: {
        "& .attempt-description, .attempt-title": {
            textDecoration: "none",
            fontSize: ".85rem"
        },
        "& .attempt-title": {
            color: "rgb(0, 89, 178)",
            fontWeight: "bold"
        },
        "& .attempt-description": {
            color: "#555"
        },
        "& .attempt-meta span, .attempt-meta a": {
            fontSize: ".75rem",
            textDecoration: "none",
            color: "#888"
        },
        "& .attempt-meta a:hover": {
            textDecoration: "underline"
        },
        "& .attempt-card": {
            padding: "10px",
            margin: "5px",
            lineHeight: "1.2rem"
        }
    }
});

export default styles;
