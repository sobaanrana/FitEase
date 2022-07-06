import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Login from './Components/LogInSignUp/Login'
import Signup from './Components/LogInSignUp/Signup'
import Navbar from './Components/Navbar/Navbar'
import Landing from './Components/Landing/Landing'
import Blogs from './Components/Blogs/Blogs'
import SingleBlog from './Components/Blogs/SingleBlog'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { useState } from 'react'
import Questionnaire from './Components/Questionnaire/Questionnaire'
import Features from './Components/Features/Features'
import Contact from './Components/ContactUs/Contact'
import FAQs from './Components/FAQs/FAQs'
import About from './Components/About/About'
import BlogSideBarLayout from './Components/Blogs/BlogSideBarLayout'
import UserDashboard from './Components/UserDashboard/UserDashboard'
import AccountSettings from './Components/AccountSettings/AccountSettings'
import UpdateQuestionnaire from './Components/Questionnaire/UpdateQuestionnaire'
import Workouts from './Components/Workouts/Workouts'
import NotFound from './Components/NotFound/NotFound'
import WriteSuccessStory from './Components/SuccessStory/WriteSuccessStory'
import SuccessStories from './Components/SuccessStory/SuccessStories'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import ForgotPassword from './Components/ForgotPassword/ForgotPassword'
import ResetPassword from './Components/ForgotPassword/ResetPassword'
import SingleSuccessStory from './Components/SuccessStory/SingleSuccessStory'

function App() {
  const isLoggedIn = localStorage.getItem('loggedInUser') ? true : false

  return (
    <div>
      <ToastContainer />

      <Router>
        <Navbar />
        <Routes>
          <Route path='*' element={<NotFound />} />

          <Route path='/' element={<Landing />} />
          <Route path='/user/login' element={<Login />} />
          <Route path='/user/signup' element={<Signup />} />
          <Route path='/user/forgot-password' element={<ForgotPassword />} />
          <Route path='/user/reset-password' element={<ResetPassword />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:id' element={<SingleBlog />} />

          <Route path='/features' element={<Features displayBanner={true} />} />
          <Route path='/contact' element={<Contact displayBanner={true} />} />
          <Route path='/faqs' element={<FAQs displayBanner={true} />} />

          <Route path='/about' element={<About displayBanner={true} />} />
          <Route path='/about' element={<About displayBanner={true} />} />

          <Route path='/workouts' element={<Workouts />} />

          <Route path='/user/questionnaire' element={<Questionnaire />} />
          <Route
            path='/user/questionnaire/update'
            element={<UpdateQuestionnaire />}
          />
          <Route path='/success-stories' element={<SuccessStories />} />
          <Route
            path='/user/success-story'
            element={<WriteSuccessStory displayBanner={true} />}
          />
          <Route
            path='/user/success-story/:id'
            element={<SingleSuccessStory />}
          />

          <Route path='/user/account-settings' element={<AccountSettings />} />
          <Route path='/user/dashboard' element={<UserDashboard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
