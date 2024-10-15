import React from "react";
import map from "../../assets/map.png";
import { motion } from "framer-motion";

const Location = () => {
  return (
    <div className="container my-36">
      <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center  gap-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-darkGray/70">
            Buy Our Products from Anywhere :
          </h1>
          <div className="flex  items-center gap-4">
            <input
              type="text"
              placeholder="Name"
              name=""
              id=""
              className="w-full lg:w-[200px] input-style"
            />
            <input
              type="email"
              placeholder="Email"
              name=""
              id=""
              className="w-full lg:w-[200px] input-style"
            />
          </div>
          <div className="flex  items-center gap-4">
            <input
              type="text"
              placeholder="Place"
              name=""
              id=""
              className="w-full lg:w-[200px] input-style"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full lg:w-[200px] input-style"
            />
          </div>
          <motion.button
            // initial={{ opacity: 0, y: 100 }}
            // whileInView={{ opacity: 1, y: 10 }}
            // transition={{ delay: 0.1 }}
            className="bg-primary px-4 py-1 rounded text-white hover:scale-110 w-full"
          >
            Order Now
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: -50 }}
          transition={{ delay: 0.1 }}
          className="col-span-2 mt-10"
        >
          <img src={map} alt="" className="sm:w-[100%] md:w-[150%]"/>
        </motion.div>
      </div>
    </div>
  );
};

export default Location;
