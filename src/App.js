import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Appcerticard from "./Component/Certificate/Appcerticard";
import Contact from "./Component/Contact/Contact";
import Appproject from "./Component/Project/Appproject";
import { BrowserRouter } from "react-router-dom";
import AppSkilll from "./Component/Skills/AppSkilll";

// import Profile from './Component/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Appproject />} />
          <Route path="/certificate" element={<Appcerticard/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       <AppSkilll/>
      </Router>
    </div>
  );
}

export default App;
