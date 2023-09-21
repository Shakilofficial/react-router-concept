import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>Post: {posts.length} </h2>
            <div className="mt-6 grid grid-cols-3 gap-5">
                {
                    posts.map(post => <Post key={post.id} post={post} ></Post> )
                }
            </div>
        </div>
    );
};

export default Posts;