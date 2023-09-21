import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, userId, title } = post;

  const navigate = useNavigate();

  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  }
  return (
    <div className="border-4 text-center p-5 border-sky-400 rounded-lg">
      <h3>User Id: {userId} </h3>
      <h2 className="text-xl font-semibold">Title: {title} </h2>
      <Link to={`/post/${id}`}>
        <button className="bg-orange-200 border-2 border-white hover:bg-orange-700 rounded-xl shadow-lg px-2 py-1 text-lg font-semibold mt-4">
          Post Details
        </button>
      </Link>
      <button className="px-2 py-1 bg-sky-200 rounded-2xl" onClick={handleShowDetail}>Show Details</button>
    </div>
  );
};

export default Post;
