import { BrowserRouter, Routes, Route } from "react-router-dom";
import TasksContainer from "../components/tasksContainer/TasksContainer";
import { NavbarComp as Navbar } from "../navbar/Navbar";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/tasks" element={<TasksContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
