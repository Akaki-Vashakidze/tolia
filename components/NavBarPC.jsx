import React, { Fragment } from 'react'
import Image from "next/image";

const NavBarPC = () => {
  return (
    <Fragment>
    <div className="w-full flex justify-center">
        <div className=" text-black rounded-lg bg-cyan-100 text-center w-fit fixed top-4 flex hiddenSM">
          <div className="flex align-middle items-center ml-4">
            <Image
              src="/toliaImages/tolia.png"
              alt=""
              width="100px"
              height="100px"
            />
          </div>
          <div className="w-full h-full justify-between items-center flex">
            <div className="m-6 drop-shadow-lg shadow-gray-400 cursor-pointer hover:underline">სიახლეები</div>
            <div className="m-6 drop-shadow-lg shadow-gray-400 cursor-pointer hover:underline">ფასები</div>
            <div className="m-6 drop-shadow-lg shadow-gray-400 cursor-pointer hover:underline">განრიგი</div>
            <div className="m-6 drop-shadow-lg shadow-gray-400 cursor-pointer hover:underline">კონტაქტი</div>
            <div className="m-6 drop-shadow-lg shadow-gray-400 cursor-pointer hover:underline">
              ჩვენს შესახებ
            </div>
          </div>
        </div>
      </div>    
    </Fragment>
  )
}

export default NavBarPC