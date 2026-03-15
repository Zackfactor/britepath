"use client";

import { MapPin, Zap } from "lucide-react";

const areas = [
  {
    name: "Oxford",
    description: "Full coverage across the city and surrounding villages.",
    primary: true,
  },
  {
    name: "Banbury",
    description: "North Oxfordshire placements and emergency cover.",
    primary: false,
  },
  {
    name: "Bicester",
    description: "Growing healthcare community with active placements.",
    primary: false,
  },
  {
    name: "Abingdon",
    description: "Vale of White Horse district staffing solutions.",
    primary: false,
  },
  {
    name: "Didcot",
    description: "South Oxfordshire healthcare and residential care homes.",
    primary: false,
  },
  {
    name: "Witney",
    description: "West Oxfordshire community and care home staffing.",
    primary: false,
  },
  {
    name: "Carterton",
    description: "Residential care and support worker placements.",
    primary: false,
  },
];

export default function AreasSection() {
  return (
    <section id="areas" className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-badge">
            <MapPin className="w-3.5 h-3.5" />
            Coverage
          </div>
          <h2 className="section-heading">
            Areas We Cover -{" "}
            <span className="gradient-text">Oxfordshire</span>
          </h2>
          <p className="section-subheading mx-auto text-center">
            We provide healthcare staffing across Oxfordshire, serving care homes, hospitals,
            supported living, and community healthcare settings.
          </p>
        </div>

        {/* Location cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {areas.map(({ name, description, primary }) => (
            <div
              key={name}
              className={
                primary
                  ? "relative rounded-2xl p-5 border-2 transition-all duration-200 hover:shadow-md hover:-translate-y-1"
                  : "ui-card p-5"
              }
              style={
                primary
                  ? {
                      borderColor: "#2FA4A9",
                      background: "linear-gradient(160deg, #EAF7F8 0%, #fff 100%)",
                    }
                  : {}
              }
            >
              {primary && (
                <span
                  className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold mb-3"
                  style={{ backgroundColor: "#2FA4A9", color: "#fff" }}
                >
                  Hub
                </span>
              )}
              <div className="flex items-center gap-2.5 mb-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: primary ? "#2FA4A9" : "#EEF2F8",
                    color: primary ? "#fff" : "#1F3A5F",
                  }}
                >
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold text-gray-900">{name}</h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}

          {/* "More areas" card */}
          <div
            className="rounded-2xl p-5 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center gap-2 hover:border-[#2FA4A9] transition-colors"
            style={{ minHeight: "120px" }}
          >
            <MapPin className="w-5 h-5 text-gray-400" />
            <p className="text-xs font-medium text-gray-500">
              Expanding coverage: contact us for your area
            </p>
          </div>
        </div>

        {/* Emergency staffing note */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, #1F3A5F 0%, #1a4a6e 100%)",
          }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "rgba(47,164,169,0.2)" }}
          >
            <Zap className="w-6 h-6" style={{ color: "#2FA4A9" }} />
          </div>
          <div className="flex-1">
            <h4 className="text-white font-semibold mb-1">Emergency Staffing Available 24/7</h4>
            <p className="text-blue-200/80 text-sm leading-relaxed">
              Need cover urgently? Our emergency response team is available around the clock across
              all Oxfordshire areas. Call us now and we&apos;ll have a qualified, vetted professional
              with you as quickly as possible.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contact");
              if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl whitespace-nowrap transition-all hover:opacity-90"
            style={{ backgroundColor: "#2FA4A9" }}
          >
            Get Emergency Cover
          </a>
        </div>
      </div>
    </section>
  );
}
