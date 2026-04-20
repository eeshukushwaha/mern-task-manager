const TaskList = ({ tasks, onDelete, onUpdate }) => {
  return (
    <div className="row">
      {tasks.map((task) => (
        <div className="col-md-4 mb-3" key={task._id}>
          <div className="card shadow-sm p-3">
            <h5>{task.title}</h5>
            <p>{task.description}</p>

            <span
              className={`badge ${
                task.status === "Pending"
                  ? "bg-warning text-dark"
                  : "bg-success"
              }`}
            >
              {task.status}
            </span>

            <div className="mt-3 d-flex justify-content-between">
              <button
                className="btn btn-sm btn-success"
                onClick={() =>
                  onUpdate(task._id, {
                    ...task,
                    status:
                      task.status === "Pending"
                        ? "Completed"
                        : "Pending",
                  })
                }
              >
                Toggle
              </button>

              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDelete(task._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;