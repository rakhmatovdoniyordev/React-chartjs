import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import { Gauge } from "@mui/x-charts/Gauge";
import { IoIosMore } from "react-icons/io";
import { CgSmileMouthOpen } from "react-icons/cg";

const Hero = () => {
  return (
    <section className="mt-6">
      <div className="grid grid-cols-8 gap-4">
        <div
          className={`bg-[url('./assets/hero.png')] w-full h-[344px] col-span-3 bg-no-repeat bg-center rounded-2xl p-9 flex flex-col justify-between`}
        >
          <div className="flex flex-col gap-2">
            <p className="text-[#A0AEC0]">Welcome back,</p>
            <h3 className="text-white text-[28px]">Mark Johnson</h3>
            <p className="text-[#A0AEC0]">
              Glad to see you again! <br />
              Ask me anything.
            </p>
          </div>
          <div>
            <a href="#" className="flex gap-2 items-center text-white">
              Tap to record <GrFormNextLink />{" "}
            </a>
          </div>
        </div>
        <div className="col-span-2 bg-[#060B28F0] rounded-2xl p-7">
          <div>
            <h4 className="text-white text-lg">Satisfaction Rate</h4>
            <p className="text-[#A0AEC0]">From all projects</p>
          </div>
          <div className="h-28 relative">
            <Gauge value={75} startAngle={-110} endAngle={110} />
            <div>
              <p className="p-2 rounded-full bg-[#0075FF] absolute bottom-[15%] left-[50%] translate-x-[-50%]">
                <CgSmileMouthOpen className="text-white text-[22px]" />
              </p>
            </div>
          </div>
          <div className="flex justify-between bg-[#1b1f30b5] px-6 py-4 rounded-3xl text-[#A0AEC0]">
            <p>0%</p>
            <div className="text-center">
              <h4 className="text-white text-[22px]">75%</h4>
              <p>Based on likes</p>
            </div>
            <p>100%</p>
          </div>
        </div>
        <div className="col-span-3 bg-[#060B28BD] rounded-2xl p-7 flex flex-col justify-between">
          <div className="flex justify-between items-center text-white">
            <h4>Referral Tracking</h4>
            <a href="#" className="p-1 bg-[#1A1F37] rounded-md">
              <IoIosMore className="text-[#7551FF]"/>
            </a>
          </div>
          <div className="flex items-center gap-12 justify-between">
            <div className="flex gap-6 flex-col flex-1">
              <div className="bg-[#27315e] text-white p-6 w-full rounded-xl">
                <h4 className="text-[#A0AEC0]">Invited</h4>
                <p className="text-[20px] font-semibold">145 people</p>
              </div>
              <div className="bg-[#27315e] text-white p-6 w-full rounded-xl">
                <h4 className="text-[#A0AEC0]">Bonus</h4>
                <p className="text-[20px] font-semibold">1,465</p>
              </div>
            </div>
            <div className="w-[40%] h-56 relative">
              <Gauge
                value={75}
                startAngle={0}
                endAngle={360}
                innerRadius="90%"
                outerRadius="80%"
                sx={{
                  color: "#fff",
                }}
              />
              <div className="text-white text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <p className="text-[#A0AEC0]">Safety</p>
                <h4 className="text-[24px] font-bold">9.3</h4>
                <p className="text-[#A0AEC0]">Total Score</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
