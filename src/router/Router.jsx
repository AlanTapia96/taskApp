import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import TasksContainer from "../components/task/tasksContainer/TasksContainer";
import UsersContainer from "../components/users/usersContainer/UsersContainer";
import { NavbarComp as Navbar } from "../navbar/Navbar";

export default function Router() {
  // const location = useLocation();
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/tasks" element={<TasksContainer />} />
        <Route path="/users" element={<UsersContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
