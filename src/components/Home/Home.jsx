import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);

  return (
    <div className="w-9/12 mx-auto my-5">
      <Header></Header>
      <div className="text-center mt-6 space-y-6">
        <h1 className="text-2xl font-semibold">Welcome to Home Page</h1>
        {
          navigation.state === "loading" ?
            <p>Loading...</p>:
        <Outlet></Outlet>
        }
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
