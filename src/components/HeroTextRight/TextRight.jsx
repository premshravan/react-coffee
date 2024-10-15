import { motion } from 'framer-motion'
import React from 'react'

const TextRight = () => {
  return (
    <div className="text-lightOrange md:mt-0 p-4 space-y-28">
    <div className="relative">
      < motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: .5,
      }}
      className="relative z-10 space-y-4 mt-48">
        <h1 className="text-2xl">Black Life Style</h1>
        <h1 className="text-sm opacity-60 leading-loose">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Nihil repudiandae eum magnam iusto.adipisicing elit. Nihil
          repudiandae eum magnam iusto.
        </h1>
      </motion.div>
      <div className="absolute w-[250px] h-[190px] bg-darkGray/50 -top-6 -right-10"></div>
    </div>
  </div>
  )
}

export default TextRight