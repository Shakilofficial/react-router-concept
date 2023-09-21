import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const { id, name, email, phone, website } = user;
    return (
        <div className="space-y-3 w-3/12 mx-auto font-semibold text-center bg-slate-200 rounded-xl p-5 ">
            <h2>Details About User: {id} </h2>
            <h2 className="text-xl">User Name: {name}</h2>
            <p>Email: {email} </p>
            <p>Phone: {phone} </p>
            <p>Website: {website} </p>
        </div>
    );
};

export default UserDetails;