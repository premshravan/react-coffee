import React from "react";

import coffe1 from "../../assets/serviceImgs/cofe1.png";
import coffe2 from "../../assets/serviceImgs/coffe2.png";
import coffe3 from "../../assets/serviceImgs/coffe3.png";


const serviceData = [
  {
    id: 1,
    image: coffe1,
    title: "Caffe Coffe",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihilrepudiandae eum magnam iusto.adipisicing elit",
  },
  {
    id: 2,
    image: coffe2,
    title: "Caffe Coffe",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihilrepudiandae eum magnam iusto.adipisicing elit",
  },
  {
    id: 3,
    image: coffe3,
    title: "Caffe Coffe",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihilrepudiandae eum magnam iusto.adipisicing elit",
  },
];

const ServiceImageDetls = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 text-center">
      {serviceData.map((servics) => {
        return (
          <div
            key={servics.id}
            className="flex flex-col items-center justify-center "
          >
            <img
              src={servics.image}
              alt=""
              className=" h-[300px] mx-auto cursor-pointer hover:scale-110 duration-300"
            />
            <h1 className="text-primary font-bold">{servics.title}</h1>
            <h4 className="text-gray-600/80">{servics.description}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceImageDetls;
