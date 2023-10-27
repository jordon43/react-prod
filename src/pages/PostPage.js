import {useParams, Link} from "react-router-dom";
import {useGetPostQuery} from "../store/postsApi";
import "../styles/PostPage.scss"
import Post from "../components/Post";


const PostPage = () => {
    const id = useParams().id;
    const {data = []} = useGetPostQuery(id);

    return (
        <div className="PostPage">
            <div className="post">
                <Post data={data}/>
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