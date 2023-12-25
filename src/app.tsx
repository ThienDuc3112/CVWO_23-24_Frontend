import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/navbar/Sidebar";
import { Container } from "@mui/material";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import ThreadPage from "./pages/Thread/ThreadPage";
import CreatePostPage from "./pages/CreatePost/CreatePostPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";

function App() {
  return (
    <>
      <Container
        style={{ maxWidth: "100%" }}
        sx={{ display: "flex", margin: 0, width: "100%" }}
      >
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/thread/:threadid" element={<ThreadPage />} />
          <Route path="/create" element={<CreatePostPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
