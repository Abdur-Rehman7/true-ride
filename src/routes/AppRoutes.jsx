import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import ResetEmail from "../pages/ResetEmail";
import ResetPhone from "../pages/ResetPhone";
import PasswordReset from "../pages/PasswordReset";
import UpdatePassword from "../pages/UpdatePassword";
import Signup from "../pages/Signup";
import CreatePassword from "../pages/CreatePassword";
import ConfirmPassword from "../pages/ConfirmPassword";
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndCondition from "../pages/TermsAndCondition";
import Compare from "../pages/Compare";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetemail" element={<ResetEmail />} />
          <Route path="/resetphone" element={<ResetPhone />} />
          <Route path="/passwordreset" element={<PasswordReset />} />
          <Route path="/updatepassword" element={<UpdatePassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/createpassword" element={<CreatePassword />} />
          <Route path="/confirmpassword" element={<ConfirmPassword />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogpost" element={<BlogPost />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandcondition" element={<TermsAndCondition />} />
          <Route path="/compare" element={<Compare />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
