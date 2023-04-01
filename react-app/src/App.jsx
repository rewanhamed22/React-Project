import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import Signup from "./Components/Signup";
import Home from "./Pages/Home/Home";
import Create from "./Pages/CreatePost/Create";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../src/Pages/Home/Home.css";
// import Contact from "./Pages/Contact";
export default function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/createpost" element={<Create />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
