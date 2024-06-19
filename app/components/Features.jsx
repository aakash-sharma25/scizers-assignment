import Image from "next/image";
import React from "react";
import { FeaturesImages } from "./data/constant";

function Features() {
  return (
    <div className="max-w-[1122px] mx-auto my-10 relative p-5">
      {/* Heading text */}
      <div className=" flex flex-col gap-5 items-center justify-center text-center ">
        <div className=" flex flex-col gap-2 text-[#004572]">
          <p className=" text-4xl font-bold tracking-widest ">Harbour</p>
          <p className=" text-4xl font-bold tracking-widest ">Lights</p>
          <p className=" text-sm ">de GRISOGONA</p>
          <p className=" text-[8px] ">GENEVE</p>
        </div>

        <div className=" flex flex-col gap-3 sm:w-[90%] md:w-[65%]">
          <h1 className=" text-[#00357B] capitalize text-4xl font-extrabold ">
            Features & Amenities
          </h1>
          <p>
            Harbour Lights beautifully honours maritime voyages while embracing
            an opulent seafront lifestyle. Its maritime-inspired amenities
            provide an unmatched seaside experience, offering a life of
            tranquility and bliss.
          </p>
        </div>
        {/* images */}
        <div className=" flex flex-wrap gap-5 my-3 justify-center md:justify-between items-center text-[#00357B]  w-full">
          {FeaturesImages.map((arr, index) => (
            <div
              key={index}
              className=" flex flex-col gap-4 w-[240px] h-[300px] p-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl items-center justify-center"
            >
              <Image
                src={arr.image}
                width={206}
                height={200}
                className="rounded-full"
                alt={"Feature image" + index}
              />
              <p className=" text-xl">{arr.text} </p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[#686868] text-xs flex items-center justify-center md:items-end md:justify-end gap-y-3 right-0">
        *T&Cs apply | ** Based on similar branded projects in the last 2 years.
        Source 1 | Source 2
      </p>
      {/* buttons */}
      <div className=" flex gap-5 items-center justify-center md:items-end md:justify-end my-5">
        <button className=" capitalize font-bold px-6 sm:px-10 py-3 bg-[#00357B] hover:bg-[#10007bb1] text-[#ffff] border-2 rounded-lg transition duration-300">
          Exteriors
        </button>
        <button className=" capitalize font-bold px-8 sm:px-10 py-3 bg-transparent text-[#00357B] hover:text-white hover:bg-[#00357B] transition duration-300 border-2 rounded-lg">
          Interiors
        </button>
      </div>
    </div>
  );
}

export default Features;
