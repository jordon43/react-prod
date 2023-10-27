import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";

const PostPage = () => {
    const id = useParams().id;
    const [post, setPost] = useState('');




    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(json => { setPost({...json}); });
    }, []);

    return (
        <div className="PostPage">
            <div className="">
                <div className="title">
                    <div className="id">Id: {post.id}</div>
                    <div className="title">{post.title}</div>
                    <div className="body">BODY: {post.body}</div>
                    <Link to={"../view"}>
                        <div><button type="button">Назад</button></div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default PostPage;