import React from "react";
import gplay from "../../assets/gplay.png";
import apple from "../../assets/apple.png";
import coffee from "../../assets/coffee.jpg";
import { motion } from "framer-motion";

const BannerStyle = {
  backgroundImage: `url(${coffee})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const BannerPoster = () => {
  return (
    <div className="container my-14">
      <div
        style={BannerStyle}
        className="sm:min-h-[450px] sm:flex sm:justify-end sm:items-center rounded-xl "
      >
        <div>
          <div className=" text-white mx-auto max-w-md  ">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: "100",
                damping: 30,
                delay: 0.5,
              }}
            >
              <h1 className="text-black text-2xl font-bold leading-loose">
                Download the App
              </h1>
              <p className="sm:text-base ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                laboriosam nostrum autem minus placeat ipsam excepturi soluta
                sapiente.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.5,
                damping: 10,
              }}
              className="flex justify-center items-center gap-3"
            >
              <a href="https://play.google.com">
                <img
                  src={gplay}
                  alt=""
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
              <a href="https://www.apple.com ">
                <img
                  src={apple}
                  alt=""
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPoster;
