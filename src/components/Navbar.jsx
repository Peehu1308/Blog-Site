import React from "react";

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
        <div className="border-r border-black h-full flex items-center justify-center" href="/">
            MAGAZINE
        </div>

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
