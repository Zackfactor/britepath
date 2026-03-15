"use client";

import { Briefcase, Clock, CreditCard, BookOpen, Users, ArrowRight, CheckCircle } from "lucide-react";

const roles = [
  {
    title: "Healthcare Assistants",
    description: "Support patients and residents with daily living activities, personal care, and wellbeing under nursing supervision.",
    level: "Entry & Experienced",
  },
  {
    title: "Support Workers",
    description: "Help individuals with learning disabilities, mental health challenges, or physical health needs to live independently.",
    level: "Entry & Experienced",
  },
  {
    title: "Senior Care Assistants",
    description: "Take a lead role in care delivery, mentoring junior staff and ensuring care standards are maintained across your shift.",
    level: "Experienced",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Guaranteed 20 Hours Per Week",
    description: "Stable, reliable income: no more worrying about zero-hours uncertainty.",
  },
  {
    icon: Briefcase,
    title: "Flexible Shifts",
    description: "Days, nights, weekends: we work around your life, not the other way round.",
  },
  {
    icon: CreditCard,
    title: "Weekly Pay",
    description: "Get paid every week, on time, every time: no chasing invoices.",
  },
  {
    icon: BookOpen,
    title: "Ongoing Training",
    description: "Free access to mandatory and specialist training to develop your career.",
  },
  {
    icon: Users,
    title: "Supportive Management",
    description: "A friendly, approachable team always available when you need guidance or support.",
  },
];

export default function CareersSection() {
  return (
    <section id="careers" className="section-padding bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="section-badge">
              <Briefcase className="w-3.5 h-3.5" />
              We&apos;re Hiring
            </div>
            <h2 className="section-heading mb-4">
              Join the{" "}
              <span className="gradient-text">BritePath</span> Team
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Build a rewarding career in healthcare with a company that genuinely cares about its
              people. Whether you&apos;re just starting out or are an experienced care professional,
              we have opportunities for you.
            </p>

            {/* Role cards */}
            <div className="space-y-4 mb-8">
              {roles.map(({ title, description, level }) => (
                <div
                  key={title}
                  className="flex gap-4 p-5 rounded-2xl border border-gray-200 hover:border-[#2FA4A9] hover:shadow-sm transition-all duration-200"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "#EEF2F8" }}
                  >
                    <Briefcase className="w-5 h-5" style={{ color: "#1F3A5F" }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                      <span
                        className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: "#EAF7F8", color: "#2FA4A9" }}
                      >
                        {level}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Apply button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("contact");
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 group"
              style={{ backgroundColor: "#1F3A5F" }}
            >
              Apply Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right — benefits */}
          <div>
            <div
              className="rounded-2xl p-8"
              style={{ background: "linear-gradient(160deg, #EAF7F8 0%, #F8FAFC 100%)", border: "1px solid #D0EFF0" }}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Why Work With BritePath?
              </h3>
              <div className="space-y-5">
                {benefits.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#fff", border: "1px solid #C8ECF0" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "#2FA4A9" }} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-0.5">{title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick checklist */}
              <div className="mt-8 pt-6 border-t border-[#C8ECF0]">
                <p className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  Requirements
                </p>
                <ul className="space-y-2">
                  {[
                    "Valid Enhanced DBS (we can support applications)",
                    "Right to work in the UK",
                    "Compassionate and committed to care",
                    "Reliable and punctual",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#2FA4A9" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
