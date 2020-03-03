import React from "react";
import { Container } from "@material-ui/core";
import CardBox from "../layout/CardBox";

const Posts = props => {
    return (
        <div>
            <h1 className="posts-heading">Recent Posts</h1>
            <CardBox />
            <CardBox />
            <CardBox />
            <CardBox />
        </div>
    );
};

export default Posts;
