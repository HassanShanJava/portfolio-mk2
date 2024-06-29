import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[60vh] text-white flex flex-col-reverse lg:flex-row gap-6 sm:gap-10 lg:gap-0 items-center justify-between">
      <div className="space-y-10">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you 👋🏻 <br /> <span className="underline underline-offset-8 decoration-green-500">I'm Hassan</span>
        </h1>
        <p className="md:w-96 text-lg  text-gray-300   ">
          Based in Pakistan, I'm a web developer passionate about building a
          modern web application that users love
        </p>

        <Link href={"mailto:hassanshan675@gmail.com"} className="group inline-block">
          <h1 className="text-3xl font-bold group-hover:text-green-400 transition-all ">Contact me 📬</h1>
          <div className="h-2 w-40 bg-green-500 rounded-full -translate-x-2"></div>
          <div className="h-2 w-40 bg-indigo-500 rounded-full "></div>
        </Link>
      </div>

      <div className="">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative"> 
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          
          <div className="glow-effect absolute top-[30%] right-1/2 -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
