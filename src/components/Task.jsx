import React from "react";

const Task = ({ task, finishTask, deleteTask}) => {
  return (
    <div className="task flex flex-col items-center gap-3 md:flex-row md:justify-between md:items-center md:gap-0 bg-white px-3 py-6 rounded-xl">
      <div className="flex flex-col items-center md:items-start">
        {task.isCompleted ? (
          <>
            <h4 className="text-2xl line-through">{task.text}</h4>
            <h5 className="text-xl line-through">({task.category})</h5>
          </>
        ) : (
          <>
            <h4 className="text-2xl">{task.text}</h4>
            <h5 className="text-xl">({task.category})</h5>
          </>
        )}
      </div>
      <div className="flex flex-row gap-2">
        <button className="text-xl bg-green-500 rounded-xl px-4 py-2 text-white hover:bg-green-600 active:bg-green-700" onClick={() => {finishTask(task)}}>
          Completar
        </button>
        <button className="text-2xl bg-red-500 rounded-xl px-4 text-white hover:bg-red-600 active:bg-red-800" onClick={() => {deleteTask(task)}}>
          x
        </button>
      </div>
    </div>
  );
};

export default Task;
