import React, { Fragment, useState } from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/Ai";

const NavBar = () => {
  const [mobileNav, setMobileNav] = useState(true);

  function changeNav() {
    setMobileNav(!mobileNav);
  }

  return (
    <Fragment>
      <div
        className={
          mobileNav
            ? "pt-4 text-xs w-[120px] text-black rounded-lg bg-cyan-100 left-[5%] text-center justify-between items-center h-[60%] fixed mt-4 md:flex ease-in duration-500"
            : " text-xs left-[-70%] ease-in duration-500 pt-4 w-[150px] text-black rounded-lg bg-cyan-100 text-center justify-between items-center h-[60%] fixed mt-4 md:flex "
        }
      >
        <div
          onClick={changeNav}
          className="flex align-center justify-center pb-2"
        >
          <AiOutlineMenuFold size={25} />
        </div>
        <div className="logo">
          <Image src="/toliaImages/tolia.png" alt="/" width="90" height="90" />
        </div>
        <div className="buttonsDiv">
          <div className="mt-4 cursor-pointer">სიახლეები</div>
          <div className="mt-4 cursor-pointer">ფასები</div>
          <div className="mt-4 cursor-pointer">განრიგი</div>
          <div className="mt-4 cursor-pointer">კონტაქტი</div>
          <div className="mt-4 cursor-pointer">ჩვენს შესახებ</div>
        </div>
        <a href="https://www.facebook.com/toliaswimclub">
        <div className="contactIcons flex justify-center mt-8 rounded-full shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaFacebook size={25} />
        </div>
        </a>
      </div>
        <div
          className={mobileNav ? "hidden" : "absolute left-4 top-4"}
          onClick={changeNav}
        >
          <AiOutlineMenuUnfold size={30} />
        </div>
    </Fragment>
  );
};

export default NavBar;
