import React, { useState } from "react";
import TaskCom from "./Task.js";
import { Task, ToDo, State } from "./task-ob.js";
let t = new Task()
const ToDoComponent = () => {
  const [state, setState] = useState(new ToDo())
  return (
    <div className="bg-indigo-950 w-full flex flex-col  items-center ov">
      <h1 className="text-gray-200 mt-20 text-6xl bold fon">
        Manage Your Life
      </h1>
      <Button label="Add a new task +" />
      <div className="flex ">
        <div className='flex flex-col m-12 bg-cyan-300 rounded-3xl bg-opacity-10'>
          <TaskCom task={t} />
          <TaskCom task={t} />
          <TaskCom task={t} />
          <TaskCom task={t} />
        </div>
        <div className='flex flex-col m-12 bg-cyan-300 rounded-3xl bg-opacity-10'>
          <TaskCom task={t} />
          <TaskCom task={t} />
        </div>
      </div>
    </div>
  );
};

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 mt-16 bg-opacity-20 h-24 text-4xl text-white font-bold py-2 px-4 rounded-2xl hover:bg-blue-700 transition duration-300"
    >
      {label}
    </button>
  );
};

export default ToDoComponent;
