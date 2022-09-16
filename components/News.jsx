import React, { Component } from "react";
import Image from "next/image";

const newsArr = [
  {
    title: "ცურვა კალორიების დაწვისთვის ყველაზე ეფექტური მეთოდია",
    text: "მაგალითისთვის 70-კილოგრამამდე ადამიანი, ერთი საათის განმავლობაში ნელი ან საშუალო სისწრაფით ცურვისას დაახლოებით 423 კალორიას წვავს, უფრო სწრაფი ტემპით ცურვისას კი — 715 კალორიამდე. შედარებისთვის, იგივე კილოგრამამდე ადამიანი 1 საათის განმავლობაში დაახლოებით 6 კილომეტრ მანძილზე სიარულით მხოლოდ 314 კალორიას დაწვავს.",
    image:
      "https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/296186862_2239841949504744_5011847161969560337_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=A5rwELJVjzoAX-awlgF&_nc_ht=scontent.ftbs5-3.fna&oh=00_AT9gyCbIV9Fi2z3MZqCBzj_YdudUp0EokGWqOBqLYmB4tA&oe=63287728",
    id: 1,
    comments: [],
    date: '14/9/2022'
  },
  {
    title: "იცოდით რომ ცურვა აუმჯობესებს ძილს? ",
    text: "ვისაც უძილობა გაწუხებთ დროა აკვა- აერობიკით, ან უბრალოდ ცურვით დაკავდეთ, ეს სპორტი გაგიუმჯობესებთ ცხოვრების და ძილის ხარისხს",
    image:
      "https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/291102584_2225057164316556_7554370477187674141_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9wI86e19P1EAX8I1BZy&_nc_ht=scontent.ftbs5-2.fna&oh=00_AT_PfmmOo7QBqtFrqgMcZoMupy3GurtGF2HFBIbE19Xzig&oe=63285244",
    id: 2,
    comments: [],
    date: '24/1/2021'
  },
  {
    title: "ცურვა კალორიების დაწვისთვის ყველაზე ეფექტური მეთოდია",
    text: "მაგალითისთვის 70-კილოგრამამდე ადამიანი, ერთი საათის განმავლობაში ნელი ან საშუალო სისწრაფით ცურვისას დაახლოებით 423 კალორიას წვავს, უფრო სწრაფი ტემპით ცურვისას კი — 715 კალორიამდე. შედარებისთვის, იგივე კილოგრამამდე ადამიანი 1 საათის განმავლობაში დაახლოებით 6 კილომეტრ მანძილზე სიარულით მხოლოდ 314 კალორიას დაწვავს.",
    image:
      "https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-6/296186862_2239841949504744_5011847161969560337_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=A5rwELJVjzoAX-awlgF&_nc_ht=scontent.ftbs5-3.fna&oh=00_AT9gyCbIV9Fi2z3MZqCBzj_YdudUp0EokGWqOBqLYmB4tA&oe=63287728",
    id: 3,
    comments: [],
    date: '14/3/2022'
  },
 
  {
    title: "ცურვა კალორიების დაწვისთვის ყველაზე ეფექტური მეთოდია",
    text: "მაგალითისთვის 70-კილოგრამამდე ადამიანი, ერთი საათის განმავლობაში ნელი ან საშუალო სისწრაფით ცურვისას დაახლოებით 423 კალორიას წვავს, უფრო სწრაფი ტემპით ცურვისას კი — 715 კალორიამდე. შედარებისთვის, იგივე კილოგრამამდე ადამიანი 1 საათის განმავლობაში დაახლოებით 6 კილომეტრ მანძილზე სიარულით მხოლოდ 314 კალორიას დაწვავს.",
    image:
      "",
    id: 4,
    comments: [],
    date: '14/3/2021'
  },
];


const News = () => {

  return (
    <div id='news' className="absolute w-full justify-center items-center flex">
      <div className="mb-10 mt-[10%] w-[76%] text-center grid text-white">
        {newsArr.map((Component) => (
          <div key={Component.id}>
            <div className="border-white border-2 m-8 p-8 border-solid rounded-2xl ">
              <div className={Component.image != "" ? " lg:grid grid-cols-2 gap-8": "flex grid-cols-2 gap-8" }>
                <div>
                  <h1 className=" font-bold mb-3">{Component.title}</h1>
                  <p>{Component.text}</p>
                </div>
                {Component.image != "" ?
                  (
                <div className="relative w-[300px] h-[300px] m-auto shadow-xl shadow-gray-400 mt-4 rounded-xl flex items-center justify-center ">
                  <Image
                    src={Component.image}
                    className="rounded-3xl"
                    layout="fill"
                    objectFit="fill"
                  />
                  </div>) : ('')
                  }
              </div>

              <div className="mt-8 text-right">{Component.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
