/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Edit from "./edit.svg";
import Check from "./check.svg";
import Rubbish from "./rubbish.svg";
const TaskCom = ({ task }) => {
  return (
    <div className="bg-white  shadow-inner p-10 rounded-3xl max-w-96 m-10">
      <h2 className="text-2xl font-bold "> Title of the task </h2>
      <h2 className="text-xl font-semibold mt-3">
        Tisk TitleTisk TitleTisk TitleTisk TitleTisk TitleTisk TitleTisk
        TitleTisk TitleTisk Title of the task e taskTisk TitleTisk TitleTisk
        
      </h2>
      <div className="flex justify-between mt-6">
        <Icon value={"rubbish"} onClick={() => { }} />
        <Icon value={"edit"} onClick={() => { }} />
        <Icon value={"check"} onClick={() => { }} />
      </div>
    </div>
  );
};

function Icon({ value, onClick }) {
  return (  
    <div
      onClick={onClick}
      className="hover:cursor-pointer "
    >
      {value !== "edit" ? (
        <img
          src={value === "rubbish" ? Rubbish : Check}
          className=" h-10 "
        />
      ) : (
        <img src={Edit} className=" h-10   " />
      )}
    </div>
  );
}
export default TaskCom;
