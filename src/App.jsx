import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Task from "./pages/task";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/tasks/:taskId" element={<Task />} />
      </Routes>
    </Router>
  );
}
