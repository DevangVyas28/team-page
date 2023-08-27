import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="w-full py-4  bg-black text-center text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#9CBAF7] to-[#9010B0] flex items-center ">
        <div className="w-[53%] flex justify-end font-semibold">The Team</div>
        <div className="w-[42%] flex justify-end">
          <button className="">Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
