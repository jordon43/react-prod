import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import {useGetPostQuery} from "../redux/postsApi";
import "../styles/PostPage.scss"

const PostPage = () => {
    const id = useParams().id;
    const {data = []} = useGetPostQuery(id);

    return (
        <div className="PostPage">
            <div className="post">
                <div className="id">id поста: {data.id}</div>
                <div className="title">{data.title}</div>
                <div className="body">{data.body}</div>
                <div className="button">
                    <Link to={"../view"}>
                        <div><button type="button">Назад</button></div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default PostPage;