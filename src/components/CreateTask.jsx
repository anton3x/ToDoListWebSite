import React, { useState } from "react";

const CreateTask = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskType, setTaskType] = useState("Selecione uma categoria");

  const addTaskToList = (e) => {
    e.preventDefault();
    addTask({ text:taskTitle, category:taskType, isCompleted: false });
  };
  return (
    <form
      className="createTasks flex flex-col items-start gap-3"
      onSubmit={addTaskToList}
    >
      <h3 className="text-3xl py-4 font-bold text-gray-700">Criar tarefa:</h3>
      <input
        type="text"
        placeholder="Digite o titulo"
        className="w-full text-xl py-1 px-1 rounded-sm"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        required
      />
      <select
        name="taskCategory"
        id="taskCategory"
        placeholder="Selecione uma categoria"
        className="text-xl py-1.5 w-full"
        value={taskType}
        onChange={(e) => {
          setTaskType(e.target.value);
        }}
        
      >
        <option value="Default">Selecione uma categoria</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Pessoal">Pessoal</option>
        <option value="Estudos">Estudos</option>
      </select>
      <button
        className="text-xl bg-blue-800 rounded-xl px-4 py-2 text-white hover:bg-blue-900 active:bg-blue-950"
        type="submit"
      >
        Criar tarefa
      </button>
    </form>
  );
};

export default CreateTask;
