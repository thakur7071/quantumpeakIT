import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./Navbar.css";
import "remixicon/fonts/remixicon.css";
import img from "../Assets/2-removebg-preview.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Case Studies", path: "/casestudies" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact", isButton: true },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(menuRef.current, { x: "100%", opacity: 0, duration: 0.3 });
    }
  }, [isMenuOpen]);

  // Close menu on window resize if screen width is greater than 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="nav">
      <img src={img} alt="Logo" className="logo" />

      {/* Desktop Links */}
      <div className="nav-links">
        {navLinks.map((link, index) => (
          <Link key={index} to={link.path} className={link.isButton ? "contact-btn" : ""}>
            {link.name}
          </Link>
        ))}
      </div>

      <i className="ri-menu-3-line mobile-menu" onClick={() => setIsMenuOpen(true)}></i>

      {/* Mobile Menu */}
      <div ref={menuRef} className={`full ${isMenuOpen ? "open" : ""}`} style={{ transform: "translateX(100%)", opacity: 0 }}>
        {navLinks.map((link, index) => (
          <h4 key={index}>
            <Link to={link.path} onClick={() => setIsMenuOpen(false)} className={link.isButton ? "contact-btn" : ""}>
              {link.name}
            </Link>
          </h4>
        ))}
        <i className="ri-close-line" onClick={() => setIsMenuOpen(false)}></i>
      </div>
    </nav>
  );
};

export default Navbar;
