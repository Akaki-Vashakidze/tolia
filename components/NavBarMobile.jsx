import React, { Fragment } from 'react';
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import Link from 'next/link';

const NavBarMobile = (props) => {
  return (
    <Fragment>
        <div
        className={
         props.mobileNav
            ? "pt-4 text-xs w-[120px] text-black rounded-lg bg-cyan-100 left-[5%] text-center justify-between items-center h-[60%] fixed mt-4 sm:hidden ease-in duration-300"
            : " text-xs left-[-50%] ease-in duration-300 pt-4 w-[150px] text-black rounded-lg bg-cyan-100 text-center justify-between items-center h-[60%] fixed mt-4 sm:hidden "
        }
      >
        <div
          onClick={props.changeNav}
          className="flex align-center justify-center pb-2"
        >
          <AiOutlineMenuFold size={25} />
        </div>
        <div className="logo">
          <Image src="/toliaImages/tolia.png" alt="/" width="90" height="90" />
        </div>
        <div onClick={props.changeNav} className="buttonsDiv">
          <Link href='/news'><div className="mt-4 cursor-pointer">სიახლეები</div></Link>
          <Link href='/prices'><div className="mt-4 cursor-pointer">ფასები</div></Link>
          <Link href='/schedule'><div className="mt-4 cursor-pointer">განრიგი</div></Link>
          <Link href='/contact'><div className="mt-4 cursor-pointer">კონტაქტი</div></Link>
          <Link href='/about'><div className="mt-4 cursor-pointer">ჩვენს შესახებ</div></Link>
        </div>
        <a href="https://www.facebook.com/toliaswimclub">
          <div className="contactIcons flex justify-center mt-8 rounded-full shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300">
            <FaFacebook size={25} />
          </div>
        </a>
      </div>
      <div
        className={props.mobileNav ? "hidden" : " fixed left-4 top-4 sm:hidden"}
        onClick={props.changeNav}
      >
        <AiOutlineMenuUnfold size={35} />
      </div>
    </Fragment>
  )
}

export default NavBarMobile