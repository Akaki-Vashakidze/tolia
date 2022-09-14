import React, { Fragment, useRef, useEffect, useState } from "react";
import Image from "next/image";
import { BiPhoneCall , BiMapPin} from "react-icons/bi";
import { GrMapLocation } from "react-icons/gr";

const ImageBackground = () => {
  let n = 1;
  const effectRan = useRef("false");

  const [link, setLink] = useState("/toliaImages/pool1.jpeg");

  useEffect(() => {
    if (effectRan.current === "false") {
      setInterval(() => {
        setLink("/toliaImages/pool" + n + ".jpeg");
        n < 4 ? n++ : (n = 1);
        console.log(n);
      }, 3000);
    }

    return () => {
      effectRan.current = "true";
    };
  }, []);

  return (
    <Fragment>
      <div className="top-0 left-0 w-full h-full fixed">
        <Image src={link} alt="/" layout="fill" />
      </div>
      <div className="top-o w-full left-0 fixed h-[100%] md:left-[10%] bg-gray-900 md:w-[80%] opacity-50 "></div>
      <div className="text-white fixed top-[95%] h-[5%] w-full left-0 bg-neutral-900 opacity-95 flex justify-center">
        <div className="w-[70%] justify-between items-center flex">
          <span className="flex justify-between items-center">
            <span className="mr-2">
              <BiMapPin />
            </span>
            <span>მისამართი: რუსთავი, მშენებელთა ქ. 15</span>
          </span>

          <span className="flex justify-between items-center">
            <span className="mr-2">
              <BiPhoneCall />
            </span>
            <span>საკონტაქტო ნომ: 0341 25 71 00 </span>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default ImageBackground;
