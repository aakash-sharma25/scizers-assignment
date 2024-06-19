import Image from "next/image";
import React from "react";
import { HeroFeaturesImages } from "./data/constant";

function HeroFeatures() {
  return (
    <div className="flex justify-evenly items-center py-10 flex-wrap gap-5 bg-[#F4F9FF] px-5">
      {HeroFeaturesImages?.map((arr, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 items-center text-center justify-center text-[#00357B] sm:w-[100px] md:w-[200px] "
        >
          <Image
            src={arr.image}
            alt={"feature image" + index}
            width={50}
            height={48}
          />
          <h3 className=" text-base">{arr.text1} </h3>
          <h1 className=" text-xl font-extrabold">{arr.text2} </h1>
        </div>
      ))}
    </div>
  );
}

export default HeroFeatures;
