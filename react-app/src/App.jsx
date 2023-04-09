import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import Signup from "./Components/Signup";
import Home from "./Pages/Home";
import Create from "./Pages/CreatePost/Create";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./Pages/About";
import Error from "./Pages/Error";
import EditPost from "./Components/EditPost";
import FullPost from "./Components/FullPost";

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
          <Route path="/about" element={<About />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/postdetails/:id" element={<FullPost />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
