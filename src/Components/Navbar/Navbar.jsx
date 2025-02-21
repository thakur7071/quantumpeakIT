import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./Navbar.css";
import "remixicon/fonts/remixicon.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Case Studies", path: "/casestudies" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (isMenuOpen) {
      // GSAP Animation for opening menu
      gsap.to(overlayRef.current, { opacity: 1, display: "block", duration: 0.3 });
      gsap.fromTo(
        menuRef.current,
        { x: "100%", opacity: 0, scale: 0.9 },
        { x: "0%", opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
      );
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" }
      );
      gsap.fromTo(
        closeBtnRef.current,
        { opacity: 0, rotate: -180, scale: 0.5 },
        { opacity: 1, rotate: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
    } else {
      // Instantly hide the menu without animation
      gsap.set(menuRef.current, { x: "100%", opacity: 0, scale: 0.9 });
      gsap.set(overlayRef.current, { opacity: 0, display: "none" });
    }
  }, [isMenuOpen]);

  return (
    <div className="main">
      <div className="nav">
        <h2>LOGO</h2>
        <i className="ri-menu-3-line mobile-menu" onClick={() => setIsMenuOpen(true)}></i>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navLinks.map((link, index) => (
            <Link key={index} to={link.path}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      <div ref={overlayRef} className="overlay" onClick={() => setIsMenuOpen(false)}></div>

      {/* Mobile Full-Screen Menu */}
      <div
        ref={menuRef}
        className="full"
        style={{ display: isMenuOpen ? "flex" : "none" }} // Hide instantly when closed
      >
        {navLinks.map((link, index) => (
          <h4 key={index}>
            <Link
              to={link.path}
              ref={(el) => (linksRef.current[index] = el)}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          </h4>
        ))}

        {/* Close Button */}
        <i ref={closeBtnRef} className="ri-close-line" onClick={() => setIsMenuOpen(false)}></i>
      </div>
    </div>
  );
};

export default Navbar;
