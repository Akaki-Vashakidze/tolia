import React from 'react'

let schedule = [
    {
        day: 'ორშაბათი',
        hours7to21: [{hour:'7 საათი', visitors:5},{hour:'8 საათი', visitors:2}, {hour:'9 საათი', visitors:0}, {hour:'10 საათი', visitors:10}, {hour:'11 საათი', visitors:29}, {hour:'12 საათი', visitors:5}, {hour:'13 საათი', visitors:7}, {hour:'14 საათი', visitors:7}, {hour:'15 საათი', visitors:7}, {hour:'16 საათი', visitors:7}, {hour:'17 საათი', visitors:7}, {hour:'18 საათი', visitors:18},{hour:'19 საათი', visitors:7},
        {hour:'20 საათი', visitors:14}]
    },
    {
        day: 'სამშაბათი',
        hours7to21: [{hour:'7 საათი', visitors:5},{hour:'8 საათი', visitors:2}, {hour:'9 საათი', visitors:0}, {hour:'10 საათი', visitors:10}, {hour:'11 საათი', visitors:29}, {hour:'12 საათი', visitors:5}, {hour:'13 საათი', visitors:7}, {hour:'14 საათი', visitors:7}, {hour:'15 საათი', visitors:7}, {hour:'16 საათი', visitors:7}, {hour:'17 საათი', visitors:7}, {hour:'18 საათი', visitors:18},{hour:'19 საათი', visitors:7},
        {hour:'20 საათი', visitors:14}]
    },
    {
        day: 'ოთხშაბათი',
        hours7to21: [{hour:'7 საათი', visitors:5},{hour:'8 საათი', visitors:2}, {hour:'9 საათი', visitors:0}, {hour:'10 საათი', visitors:10}, {hour:'11 საათი', visitors:29}, {hour:'12 საათი', visitors:5}, {hour:'13 საათი', visitors:7}, {hour:'14 საათი', visitors:7}, {hour:'15 საათი', visitors:7}, {hour:'16 საათი', visitors:7}, {hour:'17 საათი', visitors:7}, {hour:'18 საათი', visitors:18},{hour:'19 საათი', visitors:7},
        {hour:'20 საათი', visitors:14}]
    },
    {
        day: 'ხუთშაბათი',
        hours7to21: [{hour:'7 საათი', visitors:5},{hour:'8 საათი', visitors:2}, {hour:'9 საათი', visitors:0}, {hour:'10 საათი', visitors:10}, {hour:'11 საათი', visitors:29}, {hour:'12 საათი', visitors:5}, {hour:'13 საათი', visitors:7}, {hour:'14 საათი', visitors:7}, {hour:'15 საათი', visitors:7}, {hour:'16 საათი', visitors:7}, {hour:'17 საათი', visitors:7}, {hour:'18 საათი', visitors:18},{hour:'19 საათი', visitors:7},
        {hour:'20 საათი', visitors:14}]
    },
    {
        day: 'პარასკევი',
        hours7to21: [{hour:'7 საათი', visitors:5},{hour:'8 საათი', visitors:2}, {hour:'9 საათი', visitors:0}, {hour:'10 საათი', visitors:10}, {hour:'11 საათი', visitors:29}, {hour:'12 საათი', visitors:5}, {hour:'13 საათი', visitors:7}, {hour:'14 საათი', visitors:7}, {hour:'15 საათი', visitors:7}, {hour:'16 საათი', visitors:7}, {hour:'17 საათი', visitors:7}, {hour:'18 საათი', visitors:18},{hour:'19 საათი', visitors:7},
        {hour:'20 საათი', visitors:14}]
    },
    {
        day: 'შაბათი',
        hours7to21: [{hour:'7 საათი', visitors:5},{hour:'8 საათი', visitors:2}, {hour:'9 საათი', visitors:0}, {hour:'10 საათი', visitors:10}, {hour:'11 საათი', visitors:29}, {hour:'12 საათი', visitors:5}, {hour:'13 საათი', visitors:7}, {hour:'14 საათი', visitors:7}, {hour:'15 საათი', visitors:7}, {hour:'16 საათი', visitors:7}, {hour:'17 საათი', visitors:7}, {hour:'18 საათი', visitors:18},{hour:'19 საათი', visitors:7},
        {hour:'20 საათი', visitors:14}]
    },
    {
        day: 'კვირა',
        hours7to21: [{hour:'7 საათი', visitors:5},{hour:'8 საათი', visitors:2}, {hour:'9 საათი', visitors:0}, {hour:'10 საათი', visitors:10}, {hour:'11 საათი', visitors:29}, {hour:'12 საათი', visitors:5}, {hour:'13 საათი', visitors:7}, {hour:'14 საათი', visitors:7}, {hour:'15 საათი', visitors:7}, {hour:'16 საათი', visitors:7}, {hour:'17 საათი', visitors:7}, {hour:'18 საათი', visitors:18},{hour:'19 საათი', visitors:7},
        {hour:'20 საათი', visitors:14}]
    },
]


const Schedule = () => {
  return (
    <div className='absolute text-sm top-[20%] w-full justify-center items-center grid'>
    <div className="">
          <div className="mb-10 lg:hover:scale-110 ease-in duration-300">
            <li className="shadow-lg shadow-gray-400  bg-slate-100 list-none rounded-xl p-2">
              {schedule.map((child) => (
                <ul className="m-4" key={Math.random()}>
                  <span className="m-6">{`დღე: ${child.day}`}</span>
                  <div className='mt-4 mb-12'>{child.hours7to21.map(one => (
                     
                    <div key = {Math.random()}>
                        <span >{`${one.hour}: `}</span>
                        <span >{`${one.visitors} ადამიანი`}</span>
                    </div>
                    
                  ))}</div>
                </ul>
              ))}
            </li>
          </div>
          
        </div>
    </div>
  )
}

export default Schedule