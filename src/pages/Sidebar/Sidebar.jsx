import { motion } from "framer-motion";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Sidebar = () => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      whileInView={{ x: 0}}
      transition={{
        type: "spring",
        stiffness: "100",
        damping: 10,
        delay: 0.1,
      }}
    
      className=" fixed h-full top-0 right-0 w-[135px] bg-gradient-to-br  from-primary/90 to-primaryDark/15 z-10 backdrop-blur-sm text-white"
    >
      <div className="flex justify-center flex-col items-center h-full w-full gap-6">
        <div className="w-[1px] h-[120px]  bg-black"></div>
        <FaFacebook className="border rounded-full text-4xl p-1 " />
        <FaInstagram className="border rounded-full text-4xl p-1" />
        <FaInstagram className="border rounded-full text-4xl p-1" />
        <div className="w-[1px] h-[120px]  bg-black "></div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
