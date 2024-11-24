import { legacy_createStore as createStore } from "redux";

import taskReducer from "./reducers/task-reducer";

export const store = createStore(taskReducer);
