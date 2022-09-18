import React, { Fragment } from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <Fragment>
      <div className="absolute top-[20%] w-[70%] left-[15%] justify-center items-center grid">
        <div className="bg-slate-100 shadow-lg shadow-gray-400 cursor-pointer list-none rounded-xl p-2">
          <div className="m-2 md:grid md:grid-cols-2 rounded-xl">
            <div className="m-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              ullam consectetur quae quas dolorum, non, quis dolor quo
              reprehenderit quam consequatur accusamus laborum odit! Itaque
              fugiat qui corrupti possimus accusamus.
            </div>
            <div className="relative w-[250px] h-[250px] m-auto shadow-xl shadow-gray-400 mt-4 rounded-xl flex items-center justify-center hover:scale-125 ease-in duration-500">
              <Image
                src="/toliaImages/pool2.webp"
                className="rounded-3xl"
                layout="fill"
                objectFit="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;
