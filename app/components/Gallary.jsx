import Image from "next/image";
import React from "react";
import gallary1 from "@/public/assets/gallary1.jpg";
import { GallaryImages, Test } from "./data/constant";

function Gallary() {
  return (
    <div className=" max-w-[1122px]  mx-auto">
      <div className="flex flex-col gap-y-3 justify-center items-center ">
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-in-back"
          className="w-full rounded-lg "
        >
          <Image
            src={gallary1}
            height={500}
            width={1000}
            alt="First Image"
            className="w-full h-auto "
          />
        </div>
        <div className=" flex flex-wrap w-full gap-3 justify-center items-center  md:justify-between ">
          {GallaryImages.map((arr, index) => (
            <div
            data-aos="flip-up"
              key={index}
              className=" w-[46%] md:w-[24%] flex items-center justify-center"
            >
              <Image
                src={arr.image}
                height={500}
                width={250}
                alt={"Image" + index}
                className=" h-auto "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallary;
