import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  const location = useLocation();

  // Hide navbar & footer on login page
   const hideLayout = location.pathname === "/login" || location.pathname === "/forgotpassword";


  return (
    <>
      {!hideLayout && <Navbar />}

      <main>
        <Outlet />
      </main>

      {!hideLayout && <Footer />}
    </>
  );
};

export default MainLayout;
