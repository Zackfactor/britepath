"use client";

import { Zap, CalendarClock, BookOpen, Star, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Temporary & Emergency Shift Cover",
    description:
      "Last-minute absences shouldn't compromise care quality. Our rapid-response emergency staffing service connects you with qualified healthcare professionals within hours - day or night.",
    features: ["Same-day placements available", "24/7 availability", "Fully vetted staff on standby"],
    highlight: true,
    badge: "Most Popular",
  },
  {
    icon: CalendarClock,
    title: "20 Hour Contract Staff",
    description:
      "Provide your workforce with the stability of guaranteed hours. Our 20-hour contract placements offer continuity of care while giving staff reliable, consistent employment.",
    features: ["Guaranteed 20 hrs/week", "Consistent staffing", "Reduced agency dependency"],
    highlight: false,
    badge: null,
  },
  {
    icon: BookOpen,
    title: "Ongoing Block Bookings",
    description:
      "Plan ahead with confidence using our block booking service. Secure consistent, reliable cover for weeks or months at a time, reducing uncertainty and administration overhead.",
    features: ["Weekly or monthly arrangements", "Priority staff allocation", "Dedicated account support"],
    highlight: false,
    badge: null,
  },
  {
    icon: Star,
    title: "Specialist Care Support",
    description:
      "For clients with complex needs, we supply Senior Care Assistants with additional qualifications in areas such as dementia care, end-of-life care, and supported living.",
    features: ["Senior Care Assistants", "Dementia & complex care", "Specialist training verified"],
    highlight: false,
    badge: "Specialist",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-badge">
            <Star className="w-3.5 h-3.5" />
            What We Offer
          </div>
          <h2 className="section-heading">
            Healthcare Staffing{" "}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subheading mx-auto text-center">
            Flexible staffing solutions designed around the demands of modern healthcare from
            emergency cover to long-term partnership.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, description, features, highlight, badge }) => (
            <div
              key={title}
              className={
                highlight
                  ? "relative rounded-2xl border-2 p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 flex flex-col"
                  : "ui-card flex flex-col"
              }
              style={
                highlight
                  ? {
                      borderColor: "#2FA4A9",
                      background: "linear-gradient(160deg, #EAF7F8 0%, #fff 60%)",
                    }
                  : {}
              }
            >
              {/* Badge */}
              {badge && (
                <div
                  className="inline-flex self-start items-center px-2.5 py-1 rounded-full text-xs font-semibold mb-4"
                  style={{
                    backgroundColor: highlight ? "#2FA4A9" : "#EEF2F8",
                    color: highlight ? "#fff" : "#1F3A5F",
                  }}
                >
                  {badge}
                </div>
              )}

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                style={{
                  backgroundColor: highlight ? "#2FA4A9" : "#EEF2F8",
                  color: highlight ? "#fff" : "#1F3A5F",
                }}
              >
                <Icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-grow">{description}</p>

              {/* Features */}
              <ul className="space-y-2 mt-auto">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: highlight ? "#EAF7F8" : "#EEF2F8" }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: highlight ? "#2FA4A9" : "#1F3A5F" }}
                      />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Not sure which service is right for you? Our team can advise.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contact");
              if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
            style={{ color: "#2FA4A9" }}
          >
            Talk to us today
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
