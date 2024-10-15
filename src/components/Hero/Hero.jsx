import React, { useState } from "react";
import Bgimage from "../../assets/bgimage.jpg";
import blackcoffe from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";
import TextRight from "../HeroTextRight/TextRight";
import TextLeft from "../TextLeft/TextLeft";
import { motion } from "framer-motion";
import Sidebar from "../../pages/Sidebar/Sidebar";

const bgimage = {
  backgroundImage: `url(${Bgimage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <main style={bgimage} className="overflow-hidden">
      <section className="min-h-[750px] w-full">
        <div className="container">
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            <TextLeft />
            {/* imge section */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: "100",
                  damping: 30,
                  delay: 0.5,
                }}
                src={blackcoffe}
                alt="coffe"
                className="relative z-40 h-[400px] md:h[700px] img-shadow"
              />
              {/* circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.2, rotate: 40 }}
                className=" border-primary border-[20px] h-[180px] w-[180px] top-0 -right-4 absolute z-10 "
              ></motion.div>
              {/* Big text */}
              <div className="absolute -top-20 left-[210px] translate-x-30 z-[1] ">
                <div className="md:text-[100px] scale-150 sm:text-[150px] leading-none sm:text-center translate-x-20 text-darkGray/90">
                  Black tumbler
                </div>
              </div>
            </div>
            {/* third div section */}
            <TextRight />
          </div>
          {sidebar && <Sidebar />}
        </div>
      </section>
    </main>
  );
};

export default Hero;
