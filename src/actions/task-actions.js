import { ADD_TASK, DELETE_TASK, TASK_COMPLETED } from "./type-actions";

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task,
  };
}

export function completed(taskId) {
  return {
    type: TASK_COMPLETED,
    payload: taskId,
  };
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    payload: id,
  };
}
