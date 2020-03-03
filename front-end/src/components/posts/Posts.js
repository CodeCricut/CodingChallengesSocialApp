import React from "react";
import { Container } from "@material-ui/core";
import CardBox from "./../layout/CardBox";

const Posts = props => {
    return (
        <div>
            <Container maxWidth="md">
                <h1 className="posts-heading">Recent Posts</h1>
                <CardBox />
                <CardBox />
                <CardBox />
                <CardBox />
            </Container>
        </div>
    );
};

export default Posts;
