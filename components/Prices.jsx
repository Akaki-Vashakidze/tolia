import React, { Fragment } from "react";

let individual = "30";

let visit1 = "20";

let prices = [
  {
    age: "5-11",
    price: {
      visit8: "75",
      visit12: "85",
    },
  },
  {
    age: "11-18",
    price: {
      visit8: "85",
      visit12: "95",
    },
  },
  {
    age: "18-70",
    price: {
      visit8: "95",
      visit12: "105",
    },
  },
];

const Prices = () => {
  return (
    <Fragment>
      <div className="absolute text-sm top-[20%] w-full justify-center items-center grid">
        <div className="">
          <div className="mb-10 lg:hover:scale-110 ease-in duration-300">
            <li className="shadow-lg shadow-gray-400  bg-slate-100 list-none rounded-xl p-2">
              {prices.map((child) => (
                <ul className="m-4" key={Math.random()}>
                  <span className="mr-4">{`ასაკი: ${child.age}`}</span>
                  <span className="mr-4">{"ვიზიტი 8"}</span>
                  <span>{`ღირებულება: ${child.price.visit8} ლარი`}</span>
                </ul>
              ))}
            </li>
          </div>
          <div className="mb-10 lg:hover:scale-110 ease-in duration-300">
            <li className="bg-slate-100 shadow-lg shadow-gray-400  list-none rounded-xl p-2">
              {prices.map((child) => (
                <ul className="m-4" key={Math.random()}>
                  <span className="mr-4">{`ასაკი: ${child.age}`}</span>
                  <span className="mr-4">{"ვიზიტი 8"}</span>
                  <span>{`ღირებულება: ${child.price.visit12} ლარი`}</span>
                </ul>
              ))}
            </li>
          </div>
          <div className="mb-12 lg:hover:scale-110 ease-in duration-300">
            <div className="bg-slate-100 shadow-lg shadow-gray-400  list-none rounded-xl p-2">
              <div className="m-4">
                ერთჯერადი ვიზიტის ღირებულება {visit1} ლარი
              </div>
            </div>
          </div>
          <div className="mb-12 lg:hover:scale-110 ease-in duration-300">
            <div className="bg-slate-100 shadow-lg shadow-gray-400  list-none rounded-xl p-2">
              <div className="m-4">
                ინდივისუალური გაკვეთილის ღირებულება ღირებულება {individual} ლარი
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Prices;
