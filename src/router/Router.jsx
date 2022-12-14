import { BrowserRouter, Routes, Route } from "react-router-dom";
import TasksContainer from "../components/task/tasksContainer/TasksContainer";
import UsersContainer from "../components/user/usersContainer/UsersContainer";
import { NavbarComp as Navbar } from "../navbar/Navbar";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/tasks" element={<TasksContainer />} />
        <Route path="/user" element={<UsersContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
