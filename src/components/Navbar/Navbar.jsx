import { motion } from "framer-motion";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({sidebar,setSidebar}) => {
  return (
    <nav className="text-white top-10 left-0 pt-2 z-50 w-full fixed bg-black/85 rounded-lg">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring" ,stiffness:100,delay:0.5,damping:50}}
        className="container flex justify-between items-center px-6 py-4"
      >
        <div className=" ">
          <h1 className="text-2xl font-semibold uppercase">
            {" "}
            Coders <span className="text-primary">Coffe</span>{" "}
          </h1>
        </div>
        <div className="" >
          <GiHamburgerMenu className="text-3xl cursor-pointer justify-end" onClick={()=>setSidebar(!sidebar)}/>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
