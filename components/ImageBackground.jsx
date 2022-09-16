import React, { Fragment, useRef, useEffect, useState } from "react";
import Image from "next/image";

const ImageBackground = () => {
  let n = 1;
  const effectRan = useRef("false");

  const [link, setLink] = useState("/toliaImages/pool1.jpeg");

  useEffect(() => {
    if (effectRan.current === "false") {
      setInterval(() => {
        setLink("/toliaImages/pool" + n + ".jpeg");
        n < 4 ? n++ : (n = 1);
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
      
    </Fragment>
  );
};

export default ImageBackground;
