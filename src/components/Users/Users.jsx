import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2 className="">Users:{users.length} </h2>
            <div className="mt-6 grid grid-cols-3 gap-5" >
                {
                    users.map(user => <User key={user.id} user={user} ></User> )
                }
            </div>
        </div>
    );
};

export default Users;