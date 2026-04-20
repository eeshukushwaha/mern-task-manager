import { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return alert("Title required");

    onAdd({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 mb-4 shadow-sm">
      <h5 className="mb-3">Add Task</h5>

      <input
        className="form-control mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />

      <input
        className="form-control mb-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter description"
      />

      <button className="btn btn-primary w-100">Add Task</button>
    </form>
  );
};

export default TaskForm;