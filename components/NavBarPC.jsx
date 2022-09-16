import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

const NavBarPC = () => {
  return (
    <Fragment>
      <div className="w-full flex justify-center ">
        <div className=" text-black rounded-lg bg-cyan-100 text-center w-fit fixed top-4 flex h-[70px] hiddenSM">
          <div className="flex align-middle items-center ml-4 hover:scale-125 ease-in duration-300">
            <Image
              src="/toliaImages/tolia.png"
              alt=""
              width="100px"
              height="100px"
            />
          </div>
          <div className="w-full h-full justify-between items-center flex">
            <Link href="/news">
              <div
                className="m-6 drop-shadow-lg shadow-gray-400 cursor-pointer hover:underline"
              >
                სიახლეები
              </div>
            </Link>
            <Link href="/prices">
              <div className="m-6 drop-shadow-lg shadow-gray-400 cursor-pointer hover:underline">
                ფასები
              </div>
            </Link>
            <Link href="/schedule">
              <div className="m-6 drop-shadow-lg shadow-gray-400 cursor-pointer hover:underline">
                განრიგი
              </div>
            </Link>
            <Link href="/contact">
              <div className="m-6 drop-shadow-lg shadow-gray-400 cursor-pointer hover:underline">
                კონტაქტი
              </div>
            </Link>
            <Link href="/about">
              <div className="m-6 drop-shadow-lg shadow-gray-400 cursor-pointer hover:underline">
                ჩვენს შესახებ
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBarPC;
