import React from "react";

const SearchTask = ({ inputSearchTask, setInputSearchTask }) => {
  return (
    <div className="search flex flex-col items-start">
      <h3 className="text-3xl py-4 font-bold text-gray-700">Pesquisar:</h3>
      <input
        type="text"
        placeholder="Digite para pesquisar..."
        className="textinput w-full text-xl py-1 px-1 rounded-sm"
        value={inputSearchTask}
        onChange={(e) => setInputSearchTask(e.target.value)}
      />
    </div>
  );
};

export default SearchTask;
