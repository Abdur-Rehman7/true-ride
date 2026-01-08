import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import ResetEmail from "../pages/ResetEmail";
import ResetPhone from "../pages/ResetPhone";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
