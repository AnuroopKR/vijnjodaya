import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BlogDetails from "./components/BlogDetails";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
};

export default App;