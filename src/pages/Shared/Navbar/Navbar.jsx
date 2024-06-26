import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import userDefaultPic from "../../../assets/user.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const userimage = user? user.photoURL ||userDefaultPic : userDefaultPic;

  

  const navigation = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/updateProfile">Update Profile</NavLink>
      </li>
      <li>
        <NavLink to="/userProfile">User Profile</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then("successfully logged out")
      .catch((error) => console.log(error));
  };

  

  return (
    <div className="navbar bg-base-100">
      <Tooltip anchorSelect=".my-anchor-element" content={user?.displayName || "No Name"} />
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navigation}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Acquire <span className="text-green-500">Land</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navigation}</ul>
      </div>
      <div className="navbar-end">
        <div className="mr-4">
          {user ? (
            <img
              className="w-10 rounded-full my-anchor-element"
              alt="Tailwind CSS Navbar component"
              src={userimage}
            />
          ) : (
            <Link to="/register">
              <button className="btn bg-black text-white">Register</button>
            </Link>
          )}
        </div>
        {user ? (
          <button onClick={handleLogOut} className="btn">
            Log Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn bg-black text-white">Login</button>
          </Link>
        )}
      
      </div>
    </div>
  );
};

export default Navbar;
