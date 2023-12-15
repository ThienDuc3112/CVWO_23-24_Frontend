import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Sidebar from "./components/navbar/Sidebar";
import { Container } from "@mui/material";
const HomePage = lazy(() => import("./pages/Home/HomePage"));
const LoginPage = lazy(() => import("./pages/Login/LoginPage"));
const RegisterPage = lazy(() => import("./pages/Register/RegisterPage"));
const PostPage = lazy(() => import("./pages/Post/PostPage"));
const CreatePostPage = lazy(() => import("./pages/CreatePost/CreatePostPage"));
const DashboardPage = lazy(() => import("./pages/Dashboard/DashboardPage"));

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
          <Route path="/post/:postid" element={<PostPage />} />
          <Route path="/create" element={<CreatePostPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
