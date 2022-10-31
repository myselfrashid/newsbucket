import { Fragment, React, useState, } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const handleClose = () => setNav(!nav);
    return (
        <Fragment>
            <nav className="w-full h-14 bg-black drop-shadow-lg py-2">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center px-4">
                        <Link to="/">
                            <h1 className="md:text-xl font-extrabold font-nunito xs:mr-2 xs:text-2xl text-black uppercase bg-white px-5 py-1 rounded-sm tracking-wider">
                                NewsBucket
                            </h1>
                        </Link>
                        <ul className="hidden md:flex">
                            <li className="px-5 sm:px-5 py-2 rounded-md hover:text-grey-800 text-white font-bold hover:bg-white hover:text-black">
                                <Link to="/general">Home</Link>
                            </li>
                            <li className="px-5 py-2 rounded-md hover:text-grey-800 text-white font-bold hover:bg-white hover:text-black">
                                <Link to="/business">Business</Link>
                            </li>
                            <li className="px-5 sm:px-5 py-2 rounded-md hover:text-grey-800 text-white font-bold hover:bg-white hover:text-black">
                                <Link to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="px-5 py-2 rounded-md hover:text-grey-800 text-white font-bold hover:bg-white hover:text-black">
                                <Link to="/general">General</Link>
                            </li>
                            <li className="px-5 py-2 rounded-md hover:text-grey-800 text-white font-bold hover:bg-white hover:text-black">
                                <Link to="/health">Health</Link>
                            </li>
                            <li className="px-5 py-2 rounded-md hover:text-grey-800 text-white font-bold hover:bg-white hover:text-black">
                                <Link to="/science">Science</Link>
                            </li>
                            <li className="px-5 py-2 rounded-md hover:text-grey-800 text-white font-bold hover:bg-white hover:text-black">
                                <Link to="/sports">Sports</Link>
                            </li>
                            <li className="px-5 py-2 rounded-md hover:text-grey-800 text-white font-bold hover:bg-white hover:text-black">
                                <Link to="/technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden md:flex md:flex-row md:justify-end pr-4">
                        <Link
                            to="/authentication"
                            className="flex flex-row bg-indigo-200 text-black font-extrabold px-5 py-1.5 rounded-lg"
                        >Login/Signup</Link>
                    </div>
                    <div
                        className="md:hidden mr-4 cursor-pointer w-auto"
                        onClick={handleClick}
                    >
                        {!nav ? (
                            <MenuIcon className="text-white w-8" />
                        ) : (
                            <XIcon className="text-white w-8" />
                        )}
                    </div>
                </div>
                <ul
                    className={
                        !nav
                            ? "hidden"
                            : "absolute w-full px-6 pb-10 bg-black text-center font-bold text-white"
                    }
                >
                    <li
                        className="block border-b-2 border-white w-full py-5"
                        onClick={handleClose}
                    >
                        <Link to="/business">Business</Link>
                    </li>
                    <li
                        className="block border-b-2 border-white w-full py-5"
                        onClick={handleClose}
                    >
                        <Link to="/entertainment">Entertainment</Link>
                    </li>
                    <li
                        className="block border-b-2 border-white w-full py-5"
                        onClick={handleClose}
                    >
                        <Link to="/general">General</Link>
                    </li>
                    <li
                        className="block border-b-2 border-white w-full py-5"
                        onClick={handleClose}
                    >
                        <Link to="/health">Health</Link>
                    </li>
                    <li
                        className="block border-b-2 border-white w-full py-5"
                        onClick={handleClose}
                    >
                        <Link to="/science">Science</Link>
                    </li>
                    <li
                        className="block border-b-2 border-white w-full py-5"
                        onClick={handleClose}
                    >
                        <Link to="/sports">Sports</Link>
                    </li>
                    <li
                        className="block border-b-2 border-white w-full py-5"
                        onClick={handleClose}
                    >
                        <Link to="/technology">Technology</Link>
                    </li>
                    <div className="block border-b-2 border-white w-full py-5">
                        <Link to='/login'><button onClick={handleClose} className='block bg-slate-400 text-black px-8 py-2 font-bold rounded-lg w-full'>Login</button></Link>
                    </div>
                    <div className="block border-b-2 border-white w-full py-5">
                    <Link to='/signup'><button onClick={handleClose} className='block bg-slate-600 text-black px-8 py-2 font-bold rounded-lg w-full'>Sign Up</button></Link>
                    </div>
                </ul>
            </nav>
            <Outlet />
        </Fragment>
    );
};

export default Navbar;
