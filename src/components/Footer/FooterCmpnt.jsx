import { delay, motion } from "framer-motion";
import React from "react";
import payments from '../../assets/payments.png'
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const FooterCmpnt = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-10 pb-8 text-white ">
      <div className="container">
        <motion.div  
        initial={{ opcity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h1 className="text-2xl font-bold uppercase">Coders Caffe</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda quo asperiores aut sequi nobis quisquam commodi.
            </p>
            <div>
              <p className=" flex items-center gap-3">
                <FaPhone /> +54 664 654
              </p>
              <p className="flex items-center gap-3">
                <FaMapLocation />
                Newyork,Sanfransisco-UAE
              </p>
            </div>
          </div>

          <div className="space-y-6 items-center justify-center">
            <h1 className="font-bold uppercase text-2xl">Quick links</h1>
            <div className="grid sm:grid-cols-2">
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Privacy</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Privacy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="font-bold text-2xl">Follow Us On:</h1>
            <div className="flex items-center gap-2 space-y-3 space-x-3 ">
              <FaFacebookF className="text-2xl cursor-pointer" />
              <FaInstagram className="text-2xl cursor-pointer" />
              <FaTelegram className="text-2xl cursor-pointer" />
              <FaGoogle className="text-2xl cursor-pointer" />
            </div>
            <h1 className="mt-4">Payment Methods</h1>
            <img src={payments} alt="" className="w-[50%] p-2"/>
          </div>
        </motion.div  >
        <p className="border-t-2  pt-8  mt-8 text-center">
          Copy rights reserved :2024 @Copyrights
        </p>
      </div>
    </div>
  );
};

export default FooterCmpnt;
