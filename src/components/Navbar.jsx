import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/donation">Donation Campaigns</NavLink></li>
        <li><NavLink to="/help">How To Help</NavLink></li>
    </>
    return (
        <>
            <div className="navbar w-full md:w-11/12 mx-auto bg-none">
                <div className="navbar-start">

                    <a className="btn btn-ghost text-sm md:text-xl">WarmHands</a>
                    {/* <img src="./logo.gif" alt="" className="w-16 h-16" /> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/dashboard" className="btn mr-5 btn-sm bg-secondary">Dashboard</Link>
                    {
                        user ? (
                            <div className="dropdown z-10 flex items-center dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar" role="button">
                                    <div className="w-10 rounded-full">
                                        <img
                                            src={user?.photoURL || "https://via.placeholder.com/150"}
                                            alt="User Avatar"
                                        />
                                    </div>
                                </label>
                                <button className="btn btn-sm bg-primary" onClick={handleLogout}>Logout</button>

                            </div>
                        ) : (
                            <Link to="/auth/login" className="btn bg-secondary btn-sm ">
                                Login
                            </Link>
                        )
                    }
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 -left-24 p-2 shadow">
                        {links}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;