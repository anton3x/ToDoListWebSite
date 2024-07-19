import React from "react";

const FilterTask = ({ statusSelect, setStatusSelect, sortAsc, sortDesc}) => {
  return (
    <div className="filter">
      <h2 className="text-3xl py-4 text-start font-bold text-gray-700">Filtrar:</h2>
      <div className="statusDiv flex md:flex-row flex-col gap-3 ">
        <div className="statusDiv flex flex-col items-start md:w-6/12 gap-1.5">
          <h4 className="text-2xl">Status:</h4>
          <select className="text-xl py-1.5" name="status" id="statusSelect" value={statusSelect} onChange={(element) => {setStatusSelect(element.target.value)}}>
            <option value="Todas">Todas</option>
            <option value="Completas">Completas</option>
            <option value="Imcompletas">Imcompletas</option>
          </select>
        </div>
        <div className="orderDiv flex flex-col items-start md:w-6/12 gap-1.5">
          <h4 className="text-2xl text-start block">Ordem alfabética:</h4>
          <div className="flex flex-row gap-2">
            <button className="bg-blue-700 px-4 py-2 rounded-xl text-white text-xl hover:bg-blue-800 active:bg-blue-900" onClick={() => {sortAsc()}}>
              Asc
            </button>
            <button className="bg-blue-700 px-4 py-2 rounded-xl text-white text-xl hover:bg-blue-800 active:bg-blue-900" onClick={() => {sortDesc()}}>
              Desc
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTask;
