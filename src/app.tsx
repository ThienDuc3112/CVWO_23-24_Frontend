import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/navbar/Sidebar";
import { Container } from "@mui/material";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import ThreadPage from "./pages/Thread/ThreadPage";
import CreatePostPage from "./pages/CreatePost/CreatePostPage";
import Rules from "./pages/Rules/Rules";
import TopPost from "./pages/TopPost/TopPost";
import EditPost from "./pages/Edit/Post";
import EditThread from "./pages/Edit/Thread";
import Category from "./pages/Category/Category";
import Search from "./pages/Search/Search";
import Singup from "./pages/Signup/Singup";
import Profile from "./pages/Profile/Profile";
import CreateCategory from "./pages/CreateCategory/CreateCategory";
import Logout from "./pages/Logout/Logout";

function App() {
  return (
    <>
      <Container
        style={{ maxWidth: "100%" }}
        sx={{ display: "flex", margin: 0, width: "100%" }}
      >
        <Sidebar />
        <Routes>
          {/* Home page */}
          <Route path="/" element={<HomePage />} />

          {/* User related page */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Singup />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />

          {/* Different view pages */}
          <Route path="/rules" element={<Rules />} />
          <Route path="/search/:term" element={<Search />} />
          <Route path="/c/:id" element={<Category />} />
          <Route path="/t/:threadid" element={<ThreadPage />} />
          <Route path="/toppost" element={<TopPost />} />

          {/* Creation/Edit pages */}
          <Route path="/create" element={<CreatePostPage />} />
          <Route path="/edit/post/:postId" element={<EditPost />} />
          <Route path="/edit/thread/:threadId" element={<EditThread />} />

          <Route path="/newcategory" element={<CreateCategory />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
