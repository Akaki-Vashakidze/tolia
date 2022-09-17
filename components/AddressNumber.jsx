import React from 'react';
import { BiPhoneCall , BiMapPin} from "react-icons/bi";

const AddressNumber = () => {
  return (
    <div className="text-white text-xs fixed top-[95%] h-[5%] w-full left-0 bg-neutral-900 opacity-95 flex justify-center">
        <div className="w-[70%] justify-between items-center flex">
          <span className="flex justify-between items-center">
            <span className="mr-2">
              <BiMapPin />
            </span>
            <span>მისამართი: ქ.რუსთავი, მშენებელთა ქ. 15</span>
          </span>

          <span className="flex justify-between items-center">
            <span className="mr-2">
              <BiPhoneCall />
            </span>
            <span>საკონტაქტო ნომ: 0341 25 71 00 </span>
          </span>
        </div>
      </div>
  )
}

export default AddressNumber