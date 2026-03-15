"use client";

import { Target, Eye, Heart, Users } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide care homes, hospitals, and healthcare facilities across Oxfordshire with reliable, thoroughly vetted, and compassionate healthcare professionals, ensuring every patient receives the highest quality of care.",
    color: "#2FA4A9",
    bg: "#EAF7F8",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become Oxfordshire's most trusted healthcare staffing partner, known for our unwavering commitment to compliance, care quality, and the wellbeing of both staff and clients.",
    color: "#1F3A5F",
    bg: "#EEF2F8",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Compassion, integrity, and professionalism guide everything we do. We believe that great care starts with great people which is why we invest in our staff's training, development, and wellbeing.",
    color: "#2FA4A9",
    bg: "#EAF7F8",
  },
  {
    icon: Users,
    title: "Our People",
    description:
      "Every member of the BritePath team is carefully selected, fully trained, DBS-checked, and supported with ongoing supervision so you can trust them from day one.",
    color: "#1F3A5F",
    bg: "#EEF2F8",
  },
];

const stats = [
  { value: "Oxfordshire", label: "Primary Coverage Area" },
  { value: "CQC", label: "Aligned Compliance" },
  { value: "24/7", label: "Emergency Staffing" },
  { value: "100%", label: "DBS Checked Staff" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-badge">
            <Heart className="w-3.5 h-3.5" />
            About Us
          </div>
          <h2 className="section-heading">
            ABOUT BRITEPATH HEALTH CARE{" "}
            <span className="gradient-text">STAFFING</span>
          </h2>
          <p className="section-subheading mx-auto text-center">
            BritePath Health Care Staffing Ltd is a dedicated healthcare recruitment agency based in
            Oxfordshire, committed to bridging the gap between skilled healthcare professionals
            and the facilities that need them most.
          </p>
        </div>

        {/* Mission / Vision / Values cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map(({ icon: Icon, title, description, color, bg }) => (
            <div key={title} className="ui-card group cursor-default">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: bg, color }}
              >
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div
          className="rounded-2xl p-8"
          style={{ background: "linear-gradient(135deg, #1F3A5F 0%, #1a4a6e 100%)" }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats.map(({ value, label }) => (
              <div key={label} className="group">
                <p className="text-2xl sm:text-3xl font-bold text-white mb-1">{value}</p>
                <p className="text-sm text-blue-200/80">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Body copy */}
        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Built on a Foundation of Trust &amp; Compliance
            </h3>
            <p className="text-gray-500 leading-relaxed mb-4">
              We understand the unique pressures facing healthcare providers today. Staff shortages,
              last-minute absences, and the constant need for compliant, competent cover can place
              enormous strain on your service. BritePath exists to take that burden away.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Our rigorous recruitment and vetting process means every member of our workforce
              arrives ready to work professionally presented, fully trained, and aligned with your
              standards of care.
            </p>
          </div>
          <div className="space-y-3">
            {[
              "Thorough candidate screening and reference checks",
              "Mandatory training in moving & handling, medication, safeguarding and more",
              "Full employment history verification",
              "Enhanced DBS checks for all staff",
              "Right to Work checks and documentation",
              "Ongoing performance monitoring and supervision",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "#EAF7F8" }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#2FA4A9" }} />
                </div>
                <span className="text-sm text-gray-600">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
