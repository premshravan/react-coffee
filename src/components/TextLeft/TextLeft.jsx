import { motion } from "framer-motion";
import React from "react";

const TextLeft = () => {
  return (
    <div className="text-lightOrange md:mt-0 p-4 space-y-14">
      <motion.h1
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1,damping:15 }}
        whileHover={{ scale: 1.1, color: "#ee0f0f",duration:0.1 }}
        className="text-7xl ml-14 leading-tight font-bold opacity-70"
      >
        Black Tumbler
      </motion.h1>

      <div className="relative">
        <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type:"spring", delay: 0.5, duration: 1,damping:10 }}
       
        className="relative z-10 space-y-4">
          <h1 className="text-2xl">Black Life Style</h1>

          <h1 className="text-sm opacity-60 leading-loose">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            repudiandae eum magnam iusto.adipisicing elit. Nihil repudiandae eum
            magnam iusto.
          </h1>
        </motion.div>

        <div className="absolute"></div>
        <div className="absolute w-[250px] h-[190px] bg-darkGray/30 -top-6 -right-10"></div>
      </div>
    </div>
  );
};

export default TextLeft;
