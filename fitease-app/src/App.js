import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/LogInSignUp/Login";
import Signup from "./Components/LogInSignUp/Signup";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
import Blogs from "./Components/Blogs/Blogs";
import SingleBlog from "./Components/Blogs/SingleBlog";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import Questionnaire from "./Components/Questionnaire/Questionnaire";
import Features from "./Components/Features/Features";
import Contact from "./ContactUs/Contact";
import FAQs from "./Components/FAQs/FAQs";
import About from "./Components/About/About";
import BlogSideBarLayout from "./Components/Blogs/BlogSideBarLayout";
import UserDashboard from "./Components/UserDashboard/UserDashboard";

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
          <Route path="/blogs" element={<BlogSideBarLayout />} />
          <Route path="/blogs/:id" element={<SingleBlog />} />
          <Route path="/user/questionnaire" element={<Questionnaire />} />
          <Route path="/features" element={<Features displayBanner={true} />} />
          <Route path="/contact" element={<Contact displayBanner={true} />} />
          <Route path="/faqs" element={<FAQs displayBanner={true} />} />
          <Route path="/about" element={<About displayBanner={true} />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
