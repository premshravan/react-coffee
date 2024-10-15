import { delay, motion } from "framer-motion";
import React from "react";
import ServiceImageDetls from "./ServiceImageDetls";

const Services = () => {
  return (
    <div  className="container my-8 space-y-4 bg-slate-200">
      <motion.div
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        className="text-center max-w-lg mx-auto space-y-2"
      >
        <h1 className="text-3xl text-lightGray font-bold">
          <span className="text-primary">Super Tastey</span>BlackTumbler Coffe
        </h1>
        <p className="text-md opacity-85">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, est
          veniam, quia officiis repudiandae, explicabo veritatis obcaecati
          praesentium.
        </p>
      </motion.div>
      <ServiceImageDetls/>
    </div>
  );
};

export default Services;
