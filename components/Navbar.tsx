"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Compliance", href: "#compliance" },
  { label: "Areas", href: "#areas" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center group flex-shrink-0"
          >
            <div
              className={cn(
                "transition-all duration-300 rounded-lg overflow-hidden",
                isScrolled ? "" : "brightness-0 invert"
              )}
            >
              <Image
                src="/logo.svg"
                alt="BritePath Health Care Staffing"
                width={192}
                height={62}
                className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
                priority
              />
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150",
                    activeSection === link.href.replace("#", "")
                      ? "text-[#2FA4A9] bg-teal-50"
                      : isScrolled
                      ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("#careers")}
              className={cn(
                "px-4 py-2 text-sm font-semibold rounded-lg border transition-all duration-150",
                isScrolled
                  ? "border-gray-300 text-gray-700 hover:border-[#1F3A5F] hover:text-[#1F3A5F]"
                  : "border-white/40 text-white hover:border-white hover:bg-white/10"
              )}
            >
              Join Our Team
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition-all duration-150 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              style={{ backgroundColor: "#2FA4A9" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#268589";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2FA4A9";
              }}
            >
              Book Staff
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl border border-gray-100 mb-4 overflow-hidden animate-fade-in">
            <ul className="p-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="p-3 pt-1 border-t border-gray-100 flex flex-col gap-2">
              <button
                onClick={() => handleNavClick("#careers")}
                className="w-full px-4 py-2.5 text-sm font-semibold text-[#1F3A5F] rounded-lg border-2 border-[#1F3A5F] hover:bg-[#1F3A5F] hover:text-white transition-all"
              >
                Join Our Team
              </button>
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full px-4 py-2.5 text-sm font-semibold text-white rounded-lg transition-all"
                style={{ backgroundColor: "#2FA4A9" }}
              >
                Book Staff Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
