import logo from "../../assets/website/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";

const navigationLinks = [
  { id: 1, name: "home", href: "/#" },
  { id: 2, name: "services", href: "/#services" },
  { id: 3, name: "about", href: "/#about" },
];

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-secondary to-secondary/90 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3" data-aos="fade-down" data-aos-once="true">
            <img src={logo} alt="Cafe Logo" className="w-14" />
            <a
              href="/"
              className="text-2xl sm:text-3xl font-bold flex items-center gap-2 tracking-wider font-cursive"
            >
              ST cafe-point
            </a>
          </div>

          {/* Links and Buttons */}
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="flex items-center gap-4"
          >
            {/* Navigation Links */}
            <ul className="hidden sm:flex items-center gap-6">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white text-lg capitalize transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Order Button */}
            <Link to="/order">
              <button className="bg-primary px-4 py-2 rounded-full text-white hover:scale-105 transition flex items-center gap-2">
                Order
                <FaCoffee className="text-xl" />
              </button>
            </Link>

            {/* Login & Sign Up */}
            <div className="hidden sm:flex gap-2">
              <Link to="/login">
                <button className="bg-white text-secondary px-4 py-2 rounded-full hover:bg-gray-100 transition text-sm font-semibold">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-primary/90 text-white px-4 py-2 rounded-full hover:bg-primary transition text-sm font-semibold">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
