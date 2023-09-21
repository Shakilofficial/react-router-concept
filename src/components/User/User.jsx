import { Link } from "react-router-dom";
const User = ({ user }) => {
    const { name, id, email, phone, website } = user;
    return (
        <div className="">
            <div className="bg-rose-200 text-center p-5 border-2 border-black rounded-lg">
                <h2 className="text-xl font-semibold">Name: {name} </h2>
                <p className="text-lg">Email: {email} </p>
                <p className="text-lg">Phone: {phone} </p>
                <p className="text-lg">Website: {website} </p>
                <Link to={`/user/${id}`}>
                <button className="bg-orange-200 border-2 border-white hover:bg-orange-700 rounded-xl shadow-lg px-2 py-1 text-lg font-semibold mt-4">Show Details</button></Link>
            </div>
        </div>
    );
};

export default User;