import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
    <div>
        <div
        className="grid grid-cols-[1fr_1fr_3fr_1fr_1fr]
                        h-20 w-full
                        items-center text-center
                        border-b border-black
                        bg-white sticky top-0"
        >
        <Link className="border-r border-black h-full flex items-center justify-center" to="/">
            MAGAZINE
        </Link>

        <div className="border-r border-black h-full flex items-center justify-center">
            NEWSLETTERS
        </div>

        <div className="border-r border-black h-full flex items-center justify-center text-4xl font-light">
            NATIONAL DAILY NEWS
        </div>

        <div className="border-r border-black h-full flex items-center justify-center">
            LOGIN
        </div>

        <div className="h-full flex items-center justify-center">SUBSCRIBE</div>
        </div>
    </div>
    );
};

export default Navbar;
