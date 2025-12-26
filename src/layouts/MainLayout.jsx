import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main style={{ minHeight: "80vh", padding: "1rem" }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
