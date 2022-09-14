import React, { Fragment, useRef ,useEffect, useState } from "react";
import Image from "next/image";

const ImageBackground = () => {
  let width = 400;
  let height = 400;
  let n = 1;
  const effectRan = useRef('false') 

  const [link, setLink] = useState("/toliaImages/pool1.jpeg");

  useEffect(() => {
    if (effectRan.current === 'false') {
      setInterval(() => {
        setLink("/toliaImages/pool" + n + ".jpeg");
        n < 4 ? n++ : n = 1;
        console.log(n);
      }, 3000);
    }

    return () => {
      effectRan.current = 'true';
    };
  }, []);

  return (
    <Fragment>
      <div className="top-0 left-0 w-full h-full fixed">
        <Image src={link} alt="/" layout="fill"/>
      </div>
      
</Fragment>
  );
};

export default ImageBackground;
