import Navbar from "./Navbar";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import BlogsDetails from "./BlogsDetails";
import NotFound from "./NotFound";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/Create" element={<Create />}></Route>
            <Route path="/blogs/:id" element={<BlogsDetails />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
