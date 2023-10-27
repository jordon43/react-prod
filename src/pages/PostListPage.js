import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import '../styles/PostListPage.scss';
import {useGetPostsQuery} from "../redux/postsApi";


function PostListPage() {
    const [limit, setLimit] = useState(Math.round(window.innerHeight/200));

    const {data = []} = useGetPostsQuery(limit);

    const scrollHandler = (e) => {
        if(e.target.documentElement.scrollHeight-e.target.documentElement.scrollTop-window.innerHeight<1)
        {
            window.scrollTo(0,(e.target.documentElement.scrollHeight + e.target.documentElement.scrollTop));
            setLimit(limit + 5)
            sessionStorage.setItem('limitPost', limit)
        }
    }
    document.addEventListener('scroll',scrollHandler);

    useEffect(() => {
        if(sessionStorage.getItem('limitPost')){
            setLimit(sessionStorage.getItem('limitPost'));
        }
    }, []);

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
                        (data.map(post => (
                            <div className="post" key={post.id}>
                                <div className="title">Id: {post.id}</div>
                                <div className="title">{post.title}</div>
                                <div className="body">{post.body}</div>
                                <div className='button'>
                                    <Link to={"../post/" + post.id}>
                                        <button type="button" className="btn btn-lg btn-dark">Просмотр</button>
                                    </Link>
                                </div>
                            </div>
                        )))
                    }
                </div>
            </div>
        </div>
    );
}

export default PostListPage;