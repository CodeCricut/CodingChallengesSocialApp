const styles = theme => ({
    root: {
        marginTop: "20px",
        "& .profile-container": {
            padding: "5px"
        },
        "& .profile-picture": {
            objectFit: "cover",
            width: "100%",
            height: 200,
            borderRadius: "2px 2px 0 0"
        },
        "& .username": {
            margin: "5px 0",
            padding: "0 0 10px 0",
            fontSize: "1.2rem",
            color: "#222"
        },
        "& .profile-meta": {
            padding: "5px"
        },
        "& .description-header": {
            margin: "0",
            fontSize: "1.2rem",
            color: "#222"
        },
        "& .description": {
            color: "#666",
            lineHeight: "1.4rem"
        }
    }
});

export default styles;
