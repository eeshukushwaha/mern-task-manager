import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import * as api from "./services/api";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await api.getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    await api.createTask(task);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.deleteTask(id);
    fetchTasks();
  };

  const updateTask = async (id, task) => {
    await api.updateTask(id, task);
    fetchTasks();
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Task Manager</h1>

      <TaskForm onAdd={addTask} />

      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onUpdate={updateTask}
      />
    </div>
  );
}

export default App;