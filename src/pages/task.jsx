import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { completed } from "../actions/task-actions";

export default function Task() {
  const { taskId } = useParams();

  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();

  const foundTask = tasks.find((t) => t.id == taskId);

  function markAsCompleted() {
    dispatch(completed(taskId));
  }

  return (
    <div>
      <Link to="/">Go back</Link>

      {foundTask ? (
        <>
          <p>#{foundTask.id}</p>
          <h1>{foundTask.title}</h1>
          {!foundTask.isCompleted && (
            <button onClick={markAsCompleted}>Mark as completed</button>
          )}
        </>
      ) : (
        <p>No task with such id...</p>
      )}
    </div>
  );
}
