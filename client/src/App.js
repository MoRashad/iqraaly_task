import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPostPage from "./pages/AddPostPage";
import Homepage from "./pages/Homepage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/new-post" element={<AddPostPage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
