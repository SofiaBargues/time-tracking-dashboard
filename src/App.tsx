// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import work from "./assets/icon-work.svg";
import play from "./assets/icon-play.svg";
import study from "./assets/icon-study.svg";
import exercise from "./assets/icon-exercise.svg";
import social from "./assets/icon-social.svg";
import self from "./assets/icon-self-care.svg";
import jeremy from "./assets/image-jeremy.png";
import { useState } from "react";

const activities = [
  {
    category: "Work",
    currentWeek: 32,
    lastWeek: 36,
    currentMonth: 62,
    lastMonth: 66,
    currentDay: 12,
    lastDay: 16,
    color: "bg-[#ff8a62]",
    img: work,
  },
  {
    category: "Play",
    currentWeek: 10,
    lastWeek: 8,
    currentMonth: 62,
    lastMonth: 66,
    currentDay: 12,
    lastDay: 16,
    color: "bg-[#56c2e6]",
    img: play,
  },
  {
    category: "Study",
    currentWeek: 4,
    lastWeek: 7,
    currentMonth: 62,
    lastMonth: 66,
    currentDay: 12,
    lastDay: 16,
    color: "bg-[#ff5e7d]",
    img: study,
  },
  {
    category: "Exercise",
    currentWeek: 4,
    lastWeek: 5,
    currentMonth: 62,
    lastMonth: 66,
    currentDay: 12,
    lastDay: 16,
    color: "bg-[#4bcf83]",
    img: exercise,
  },

  {
    category: "Social",
    currentWeek: 5,
    lastWeek: 10,
    currentMonth: 62,
    lastMonth: 66,
    currentDay: 12,
    lastDay: 16,
    color: "bg-[#7235d1]",
    img: social,
  },
  {
    category: "Self Care",
    currentWeek: 2,
    lastWeek: 2,
    currentMonth: 62,
    lastMonth: 66,
    currentDay: 12,
    lastDay: 16,
    color: "bg-[#f1c75b]",
    img: self,
  },
];

function App() {
  const [time, setTime] = useState<"daily" | "weekly" | "monthly">("weekly");

  function handleClickWeek() {
    setTime("weekly");
  }
  function handleClickDaily() {
    setTime("daily");
  }
  function handleClickMonthly() {
    setTime("monthly");
  }
  console.log(time);
  return (
    <div className="bg-[#0d1323] flex justify-center h-full md:h-screen">
      <div className="justify-center  text-white  flex flex-col md:flex-row m-auto gap-2 p-7">
        <div className=" bg-[#1d204b] md:h-[432px] md:w-[210px] flex flex-col items-start h-[127px] w-[200px] m-4 rounded-lg">
          <div className="flex md:p-8 bg-[#5746ea] h-[80px] md:h-[352px] md:flex-col  w-[200px] p-4 gap-3 rounded-lg">
            <img
              className="border-4 h-12 w-12  md:h-[79px] md:w-[79px]  rounded-full"
              src={jeremy}
            ></img>
            <div className=" md:my-6">
              <div className="text-xs  text-[#a29bf5]">Report for</div>
              <div className="md:text-4xl">Jeremy Robson</div>
            </div>
          </div>
          <div className="text-[13px] text-[#7377b7] flex md:text- m-auto md:m-4 md:flex-col gap-5">
            <button
              onClick={handleClickDaily}
              className="hover:text-white cursor-pointer"
            >
              Daily
            </button>
            <button
              onClick={handleClickWeek}
              className="hover:text-white cursor-pointer"
            >
              Weekly
            </button>
            <button
              onClick={handleClickMonthly}
              className="hover:text-white cursor-pointer"
            >
              Monthly
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3">
          {activities.map((element, index) => (
            <div
              className={
                element.color +
                " " +
                " flex relative h-[127px] w-[200px] m-4 rounded-lg flex-col overflow-hidden"
              }
            >
              <img
                className="h-12 right-3 absolute -top-1"
                src={element.img}
              ></img>
              <div
                className="bg-[#1d204b] mt-7 z-10 h-full sm:h-[197px] p-4 rounded-lg w-full flex flex-col justify-center "
                key={index}
              >
                <div className="flex justify-between items-center">
                  <h3 className=" text-sm font-semibold">{element.category}</h3>
                  <div className=" flex flex-row gap-[3px] ">
                    <div className=" rounded-full h-1 w-1 bg-[#b5b6eb]"> </div>
                    <div className=" rounded-full h-1 w-1 bg-[#b5b6eb]"> </div>
                    <div className=" rounded-full h-1 w-1 bg-[#b5b6eb]"> </div>
                  </div>
                </div>

                <div className="flex flex-row justify-between items-center">
                  <p className=" text-white font-light text-2xl ">
                    {element.currentWeek}hrs
                  </p>
                  <p className=" text-[#c5c9f7] text-xs">
                    Last Week - {element.lastWeek} hrs
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
