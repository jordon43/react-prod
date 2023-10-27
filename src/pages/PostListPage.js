import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import '../styles/PostListPage.scss';

function PostListPage() {
    const [Posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(20);

    const scrollHandler = (e) => {
        if(e.target.documentElement.scrollHeight-e.target.documentElement.scrollTop-window.innerHeight<1)
        {
            window.scrollTo(0,(e.target.documentElement.scrollHeight + e.target.documentElement.scrollTop));
            setLimit(limit + 5)
        }
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=${limit}`)
            .then(response => response.json())
            .then(json => {
                let postList = []
                console.log(json);
                json.forEach((post) => postList.push({
                    userId: post.userId,
                    id: post.id,
                    title: post.title,
                    body: post.body
                }));
                setPosts(postList);
                console.log(Posts);
            })
        document.addEventListener('scroll',scrollHandler)
    }, [limit]);


    return (
        <div className="PostListPage">
            <div className="main">
                <div className="block-title-post">
                    <h1 className="title">
                        Список Постов
                    </h1>
                </div>
                <div className="block-posts">
                    {
                        (Posts.map(post => (
                            <div className="post">
                                <div className="title">Id: {post.id}</div>
                                <div className="title">{post.title}</div>
                                <div className="body">{post.body}</div>
                                <Link to={"../post/" + post.id}>
                                    <div className='button'>
                                        <button type="button" className="btn btn-lg btn-dark">Просмотр</button>
                                    </div>
                                </Link>
                                <br/>
                            </div>
                        )))
                    }
                </div>
            </div>
        </div>
    );
}

export default PostListPage;