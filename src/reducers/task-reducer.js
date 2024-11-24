import { ADD_TASK, DELETE_TASK, TASK_COMPLETED } from "../actions/type-actions";

export default function taskReducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];

    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);

    case TASK_COMPLETED:
      return state.map((task) => {
        if (task.id == action.payload)
          return {
            ...task,
            isCompleted: true,
          };

        return task;
      });

    default:
      return state;
  }
}
