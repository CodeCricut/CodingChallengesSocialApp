const styles = theme => ({
    root: {
        "& .comment-meta": {
            fontSize: "0.9rem",
            margin: "15px 0 3px 0"
        },
        "& .username": {
            color: "rgb(0, 89, 178)",
            textDecoration: "none",
            paddingRight: "10px"
        },
        "& .comment-age": {
            color: "#888",
            paddingLeft: "10px"
        },
        "& .comment-text": {
            color: "#444",
            lineHeight: "1.4rem"
        }
    }
});

export default styles;
