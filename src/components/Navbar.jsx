import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/donation">Donation Campaigns</NavLink></li>
                            <li><NavLink to="/help">How To Help</NavLink></li>
    </>
    return (
        <>
            <div className="navbar w-11/12 mx-auto bg-base-100">
                <div className="navbar-start">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                           {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">WarmHands</a>
                    <img src="./logo.gif" alt="" className="w-16 h-16" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/dashboard" className="btn mr-5 bg-secondary">Dashboard</Link>
                    <Link to="/login" className="btn bg-primary">Login</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;