import Image from "next/image";
import React from "react";
import Logo from "@/public/assets/logo.png";
import HeroFeatures from "./HeroFeatures";

function Hero() {
  return (
    <>
      <div className="flex justify-center flex-col bg-custom w-full">
        <div className=" min-w[100vw] lg:min-w-[1132px] mx-auto">
          {/* header div */}
          <header className=" mt-[57px] flex justify-between lg:w-full p-5 w-screen sm:w-full">
            <Image
              src={Logo}
              alt="company Logo"
              width={166}
              height={21}
              className=" w-[100px] md:w-[166px]  h-auto "
            />
            <button
              className="bg-transparent border-2 border-[#17ABFF] text-[#17ABFF] 
              px-4 py-2 rounded-md hover:bg-[#1774ff] hover:text-white transition duration-300 hidden md:block"
            >
              ENQUIRE NOW
            </button>
          </header>

          {/* hero text div */}
          <div className=" p-5 my-[200px] flex flex-wrap justify-center md:justify-between text-white items-center gap-y-10  w-screen sm:w-full">
            {/* left side text div */}
            <div className=" flex flex-col gap-5 md:w-[498px] sm:w-full ">
              <h1 className="md:text-4xl sm:text-2xl font-bold">
                HARBOUR LIGHTS DE
                <span className=" text-[#17ABFF]">GRESOGONO</span>
              </h1>
              <p className=" capitalize font-bold text-xl">
                1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City
              </p>
              {/*  */}
              <div className=" flex flex-col gap-3">
                <div className=" flex gap-1 items-center bg-dark ">
                  <div className="bg-blue-500 h-[38px] w-[3px] "></div>
                  <p>
                    Rental Returns of
                    <span className=" font-semibold"> UPTO 11%**</span>
                  </p>
                </div>
                <div className=" flex gap-1 items-center bg-dark ">
                  <div className="bg-blue-500 h-[38px] w-[3px] "></div>
                  <p>
                    Capital Appreciation of
                    <span className=" font-semibold"> UPTO 32%**</span>
                  </p>
                </div>
              </div>
            </div>

            {/* right side text div */}
            <div className=" bg-blurry-dark flex flex-col gap-3 w-[330px] justify-center p-8 rounded-lg">
              <p className=" text-[13px]">PRICING STARTS FROM</p>
              <p className=" text-4xl font-bold">$ 425,000</p>
              <p className=" text-xl">AED 1.3 Million</p>
              <button className=" px-3 py-4 bg-[#17ABFF] hover:bg-[#177fff] transition duration-300">
                GET A PRESENTATION
              </button>
              <hr className="" />
              <p className=" text-sm text-[#98C5E8]">
                Get an Expert’s Presentation of Real Estate in Dubai for Life
                and investment
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* hero features */}
      <HeroFeatures />
    </>
  );
}

export default Hero;
