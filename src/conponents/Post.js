import React from "react";


const Post = (props) => {
    return(
        <div className="post_comp">
            <div className="id">id поста: {props.data.id}</div>
            <div className="title">{props.data.title}</div>
            <div className="body">{props.data.body}</div>
        </div>
    );
}

export default Post;