import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/LogInSignUp/Login";
import Signup from "./Components/LogInSignUp/Signup";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
import Blogs from "./Components/Blogs/Blogs";
import SingleBlog from "./Components/Blogs/SingleBlog";
import Blgs from "./Components/Blogs/Blgs";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import Questionnaire from "./Components/Questionnaire/Questionnaire";

function App() {
  const [isLoggedInUser, setIsLoggedInUser] = useState(
    localStorage.getItem("loggedInUser") ? true : false
  );
  return (
    <div>
      <ToastContainer />

      <Router>
        <Navbar isLoggedInUser={isLoggedInUser} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<SingleBlog />} />
          <Route path="/user/questionnaire" element={<Questionnaire />} />
        </Routes>
        {/*<Footer />*/}
      </Router>
    </div>
  );
}

export default App;
