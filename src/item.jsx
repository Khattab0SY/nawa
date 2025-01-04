import React from "react";
import { useParams } from "react-router";
import data from "../../json/nawaqd.json";

const item = () => {
  const { id } = useParams();
  const element = data.find((item) => item.id === parseInt(id)); // البحث عن العنصر

  

  return (
    <>
      <div
        className={`h-screen w-full flex flex-col justify-center items-center`}
      >
        <div className="w-full h-[10%] flex justify-center items-center px-4">
          <h1 className="text-2xl bg-bg1 w-full h-[70%] rounded-xl flex justify-center items-center pb-2 shadow-xl">
            {element.name}
          </h1>
        </div>
        <div className="w-full h-[30%] flex justify-center items-center px-4">
          <p className="text-lg text-center px-4 bg-bg1 w-full h-[90%] rounded-xl flex justify-center items-center pb-1 shadow-xl">
            {element.item}
          </p>
        </div>
        <div className="w-full h-[60%] flex justify-center items-center px-4">
          <p className="overflow-y-scroll text-lg text-center px-4 bg-bg1 w-full h-[90%] rounded-xl py-5 shadow-xl">
            {element.explain}
          </p>
        </div>
      </div>
    </>
  );
};

export default item;
