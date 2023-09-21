import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="space-y-5 text-center w-6/12 mx-auto mt-5">
            <h2 className="text-5xl font-bold">Opppsss!!!</h2>
            <hr />
            <p>{error.statusText || error.message} </p>
            {
                error.status === 404 && <div className="space-y-4">
                    <h3>Page Not Found</h3>
                    <hr />
                    <p className="my-4">Go Back Where you from</p>
                    <Link to="/" ><button className="px-2 py-1 bg-green-400 rounded-2xl">Go Back Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;