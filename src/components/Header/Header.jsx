import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-orange-200 rounded-xl">
      <div className="flex px-4 p-2 justify-between text-center items-center">
        <h2 className="text-2xl font-bold">Navbar</h2>
        <nav className="space-x-4 text-lg font-semibold">
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/users" >User</NavLink>
          <NavLink to="/posts" >Post</NavLink>
          <NavLink to="/about" >About</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
