"use client";

import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Compliance", href: "#compliance" },
    { label: "Areas We Cover", href: "#areas" },
  ],
  careers: [
    { label: "Join Our Team", href: "#careers" },
    { label: "Healthcare Assistants", href: "#careers" },
    { label: "Support Workers", href: "#careers" },
    { label: "Senior Care Assistants", href: "#careers" },
  ],
  contact: [
    { label: "Contact Us", href: "#contact" },
    { label: "Book Staff", href: "#contact" },
    { label: "Emergency Cover", href: "#contact" },
  ],
};

export default function Footer() {
  const handleNav = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <footer style={{ backgroundColor: "#0D1F36" }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center mb-5 group w-fit">
              <Image
                src="/logo.svg"
                alt="BritePath Health Care Staffing"
                width={180}
                height={58}
                className="h-14 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </a>

            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Reliable, compliant healthcare staffing across Oxfordshire. Connecting care homes,
              hospitals, and healthcare settings with qualified, DBS-checked professionals.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-white/50 hover:text-white/80 transition-colors group">
                <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: "#2FA4A9" }} />
                <span className="text-xs">Oxfordshire, United Kingdom</span>
              </div>
              <div className="flex items-center gap-2.5 group">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#2FA4A9" }} />
                <a
                  href="mailto:info@britepathcare.co.uk"
                  className="text-xs text-white/50 hover:text-white/80 transition-colors"
                >
                  info@britepathcare.co.uk
                </a>
              </div>
              <div className="flex items-center gap-2.5 group">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#2FA4A9" }} />
                <a
                  href="tel:+447714397864"
                  className="text-xs text-white/50 hover:text-white/80 transition-colors"
                >
                  +44 7714 397864
                </a>
              </div>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={handleNav(href)}
                    className="text-xs text-white/50 hover:text-white/80 transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Careers links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Careers</h4>
            <ul className="space-y-2.5">
              {footerLinks.careers.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={handleNav(href)}
                    className="text-xs text-white/50 hover:text-white/80 transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact links + CTA */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2.5 mb-6">
              {footerLinks.contact.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={handleNav(href)}
                    className="text-xs text-white/50 hover:text-white/80 transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={handleNav("#contact")}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white rounded-lg transition-all hover:opacity-90"
              style={{ backgroundColor: "#2FA4A9" }}
            >
              Book Staff Now
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} BritePath Health Care Staffing Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Caring for Oxfordshire, one placement at a time
          </p>
        </div>
      </div>
    </footer>
  );
}
