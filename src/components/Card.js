import React from "react";

const Card = (a) => {
  return (
    <div className="flex flex-col shadow-3xl justify-around items-center  rounded-lg w-1/4 h-96">
      <img src={a.obj.image} className="h-40 rounded-full " />
      <h3 className=" font-bold tracking-tight text-gray-900 sm:text-xl md:text-3xl ">
        {a.obj.title}
      </h3>
      <p>{a.obj.describtion}</p>
    </div>
  );
};
export default Card;
