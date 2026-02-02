import { Link } from "react-router-dom";
import logo from "./assets/Logo.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Buy A Car", path: "/buycar" },
    { label: "Sell My Car", path: "/sellmycar" },
    { label: "Services & Tools", path: "/", hasIcon: true },
    { label: "Promotions & Specials", path: "/" },
    { label: "Compare", path: "/compare" },
    { label: "Blog", path: "/blog" },
    { label: "About", path: "/about", hasIcon: true },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full bg-surface shadow-md">
      <nav className="mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </Link>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-6 text-black">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="flex items-center gap-1 text-sm font-medium transition hover:text-primary"
            >
              {item.label}
              {item.hasIcon && (
                <MdOutlineKeyboardArrowDown className="text-lg" />
              )}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 text-sm font-medium text-black rounded-md transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-4 py-2 text-sm font-medium bg-primary text-black rounded-md transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
