import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const { id, title, body } = post;
    const handleGoBack = () => {
        navigate(-1);
    }


    return (
        <div className="space-y-3 w-6/12 mx-auto font-semibold text-center bg-slate-200 rounded-xl p-5">
            <h2>Post Id: {id} </h2>
            <h2 className="text-xl">Title: {title} </h2>
            <p>{body} </p>
            <button className="px-2 py-1 bg-green-400 rounded-2xl" onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;