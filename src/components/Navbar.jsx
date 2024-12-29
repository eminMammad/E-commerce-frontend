import React from "react";
import { assets } from "../assets/frontend_assets/assets.js";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono">

            {/*here we can put our logo*/}
            <img src={assets.logo} className='w-36' alt="" />
            <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
                <li>
                    <NavLink to="/home" className="flex flex-col items-center gap-1">
                        <p>Home</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 margin-0 mx-auto hidden' />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="flex flex-col items-center gap-1">
                        <p>About</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 margin-0 mx-auto hidden' />
                    </NavLink></li>
                <li>
                    <NavLink to="/collection" className="flex flex-col items-center gap-1">
                        <p>Collection</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 margin-0 mx-auto hidden"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="flex flex-col items-center gap-1">
                        <p>Contact</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 margin-0 mx-auto hidden' />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className="flex flex-col items-center gap-1">
                        <p>Cart</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 margin-0 mx-auto hidden' />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" className="flex flex-col items-center gap-1">
                        <p>Login</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 margin-0 mx-auto hidden' />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/orders" className="flex flex-col items-center gap-1">
                        <p>Orders</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 margin-0 mx-auto hidden' />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/place-order" className="flex flex-col items-center gap-1">
                        <p>Place Order</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 margin-0 mx-auto hidden' />
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;