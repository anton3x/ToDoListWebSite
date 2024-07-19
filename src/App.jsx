import { useState , useEffect} from "react";
import SearchTask from "./components/SearchTask";
import FilterTask from "./components/FilterTask";
import Task from "./components/Task";
import CreateTask from "./components/CreateTask";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [
      {
        id: 1,
        text: "Criar x feature",
        category: "Trabalho",
        isCompleted: false,
      },
      {
        id: 2,
        text: "Ir pra academia",
        category: "Pessoal",
        isCompleted: false,
      },
      {
        id: 3,
        text: "Estudar React",
        category: "Estudos",
        isCompleted: false,
      },
    ];
  });
  
  useEffect(() => {
    // Atualiza o localStorage sempre que o estado `tasks` muda
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [statusSelect, setStatusSelect] = useState("Todas");
  const [inputSearchTask, setInputSearchTask] = useState("");

  const addTask = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
  };
  const finishTask = (taskToFinish) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskToFinish.id ? { ...task, isCompleted: !taskToFinish.isCompleted } : task
    );
    setTasks(updatedTasks);
  };
  const deleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task.id != taskToDelete.id);
    setTasks(updatedTasks);
  };
  const sortTasksAsc = () => {
    const sortedTasks = [...tasks].sort((a, b) => a.text.localeCompare(b.text));
    setTasks(sortedTasks);
  };

  const sortTasksDesc = () => {
    const sortedTasks = [...tasks].sort((a, b) => b.text.localeCompare(a.text));
    setTasks(sortedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (inputSearchTask !== "" && statusSelect === "Completas") return task.text.toLowerCase().startsWith(inputSearchTask.toLowerCase()) === inputSearchTask && task.isCompleted;
    if (inputSearchTask !== "" && statusSelect === "Imcompletas") return task.text.toLowerCase().startsWith(inputSearchTask.toLowerCase()) && !task.isCompleted;
    if (inputSearchTask !== "" && statusSelect === "Todas") return task.text.toLowerCase().startsWith(inputSearchTask.toLowerCase());
    if (inputSearchTask === "" && statusSelect === "Completas") return task.isCompleted;
    if (inputSearchTask === "" && statusSelect === "Imcompletas") return !task.isCompleted;
    return true;
  });

  
  return (
    <>
      <div className="container bg-slate-300 rounded-lg flex-column py-7 px-8 shadow-lg shadow-slate-500">
        <h2 className="text-4xl text-center font-bold text-gray-700">Lista de Tarefas</h2>
        <SearchTask inputSearchTask={inputSearchTask} setInputSearchTask={setInputSearchTask}/>
        <hr className="linha bg-black w-full h-0.5 my-4" />
        <FilterTask
          statusSelect={statusSelect}
          setStatusSelect={setStatusSelect}
          sortAsc={sortTasksAsc}
          sortDesc={sortTasksDesc}
        />
        <hr className="linha bg-black w-full h-0.5 my-4" />
        <div className="tasks flex flex-col gap-2">
          {filteredTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              finishTask={finishTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
        <hr className="linha bg-black w-full h-0.5 my-4" />
        <CreateTask addTask={addTask} />
      </div>
    </>
  );
}

export default App;
