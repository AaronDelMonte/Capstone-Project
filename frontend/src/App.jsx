import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";// VERCEL FIX: Updated import path to match renamed file (Home.jsx) for case-sensitive Linux filesystem compatibility
import Assessment from "./pages/Assessment";
import Result from "./pages/Result";
import LearningPath from "./pages/LearningPath";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/result" element={<Result />} />
        <Route path="/learning-path" element={<LearningPath />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
