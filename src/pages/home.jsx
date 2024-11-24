import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { addTask, deleteTask } from "../actions/task-actions";
import { Trash } from "lucide-react";

export default function Home() {
  const [task, setTask] = useState("");

  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      addTask({
        id: Date.now(),
        title: task,
        isCompleted: false,
      })
    );

    setTask("");
  }

  function handleDelete(id) {
    dispatch(deleteTask(id));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Add Task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      {tasks.length === 0 ? (
        <p>Makaynch tasks...</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id}>
            <Link
              to={`/tasks/${task.id}`}
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: task.isCompleted ? "green" : "orange",
                paddingRight: "1rem",
              }}
            >
              {task.title}
            </Link>
            <button onClick={() => handleDelete(task.id)}>
              <Trash />
            </button>
          </div>
        ))
      )}
    </div>
  );
}
