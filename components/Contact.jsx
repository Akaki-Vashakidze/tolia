import React, { Fragment } from "react";

const Contact = () => {
  return (
    <Fragment>
      <div className="absolute top-[20%] w-full justify-center items-center grid">
        <div className="mb-12 hover:scale-110 ease-in duration-300">
          <div className="bg-slate-100 shadow-lg shadow-gray-400  list-none rounded-xl p-2">
            <div className="m-6">დაგვიკავშირდით Facebook-ის მეშვეობით</div>
          </div>
        </div>
        <div className="mb-12 hover:scale-110 ease-in duration-300">
          <div className="bg-slate-100 shadow-lg shadow-gray-400  list-none rounded-xl p-2">
            <div className="m-6">მისამართი:მისამართი: ქ.რუსთავი, მშენებელთა ქ. 15</div>
          </div>
        </div>
        <div className="mb-12 hover:scale-110 ease-in duration-300">
          <div className="bg-slate-100 shadow-lg shadow-gray-400  list-none rounded-xl p-2">
            <div className="m-6">მობილურის ნომერი: 0341 25 71 00 </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Contact