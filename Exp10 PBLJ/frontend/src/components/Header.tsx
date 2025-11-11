import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "figma:asset/b67ae330647ce5de434c88aa9f55b480793d2deb.png";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Resources", href: "#resources" },
    { label: "Contact", href: "#contact" },
  ];

  // Function for smooth scroll
  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false); // close mobile menu if open
  };

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50 border-b border-cyan-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={logoImage}
              alt="MannMitra Logo"
              className="w-10 h-10 object-cover rounded-full border-2 border-cyan-400/30"
            />
            <span className="text-xl font-semibold text-white">MANNMITRA</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-200 hover:text-cyan-400 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-200 hover:text-cyan-400 hover:bg-cyan-400/10"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-cyan-500/20">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-200 hover:text-cyan-400 transition-colors duration-200 px-4 py-2 text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/25">
                  Book Appointment
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
