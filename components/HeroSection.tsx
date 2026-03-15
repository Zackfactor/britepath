"use client";

import Image from "next/image";
import { Shield, Clock, Award, CheckCircle, ArrowRight, ChevronDown } from "lucide-react";

const trustIndicators = [
  {
    icon: Award,
    label: "Trained Healthcare Assistants",
  },
  {
    icon: Shield,
    label: "DBS Checked Staff",
  },
  {
    icon: Clock,
    label: "Rapid Shift Coverage",
  },
  {
    icon: CheckCircle,
    label: "CQC Aligned Compliance",
  },
];

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f2240 0%, #1F3A5F 45%, #1a4a6e 100%)",
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: "#2FA4A9" }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-15"
        style={{ backgroundColor: "#2FA4A9" }}
      />

      <div className="section-container section-padding pt-32 pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 border"
              style={{ backgroundColor: "rgba(47,164,169,0.15)", borderColor: "rgba(47,164,169,0.3)", color: "#7FD4D8" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#2FA4A9" }} />
              Trusted Healthcare Staffing in Oxfordshire
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Reliable Healthcare{" "}
              <span className="block" style={{ color: "#2FA4A9" }}>
                Staffing Across
              </span>
              Oxfordshire
            </h1>

            {/* Subtext */}
            <p className="text-lg text-blue-100/80 leading-relaxed mb-8 max-w-lg">
              Professional Healthcare Assistants, Support Workers, and Senior Care Assistants
              available for{" "}
              <span className="text-white font-medium">temporary cover</span>,{" "}
              <span className="text-white font-medium">ongoing placements</span>, and{" "}
              <span className="text-white font-medium">emergency shifts</span>.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
                style={{ backgroundColor: "#2FA4A9" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#268589";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2FA4A9";
                }}
              >
                Book Staff Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo("careers")}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200"
              >
                Join Our Team
              </button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 gap-3">
              {trustIndicators.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.07)",
                    borderColor: "rgba(255,255,255,0.12)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(47,164,169,0.2)" }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "#2FA4A9" }} />
                  </div>
                  <span className="text-xs font-medium text-white/80 leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — image */}
          <div className="relative lg:block animate-fade-in">
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-20 blur-xl"
                style={{ backgroundColor: "#2FA4A9" }}
              />

              {/* Image card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80"
                  alt="Professional healthcare worker in scrubs"
                  width={600}
                  height={720}
                  className="w-full h-full object-cover"
                  style={{ maxHeight: "560px" }}
                  priority
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(31,58,95,0.6) 0%, transparent 50%)",
                  }}
                />

                {/* Floating stat card */}
                <div
                  className="absolute bottom-6 left-6 right-6 px-5 py-4 rounded-2xl backdrop-blur-md border border-white/20"
                  style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                >
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {[
                      { value: "200+", label: "Placements Made" },
                      { value: "24/7", label: "Emergency Cover" },
                      { value: "100%", label: "DBS Verified" },
                    ].map(({ value, label }) => (
                      <div key={label}>
                        <p className="text-xl font-bold text-white">{value}</p>
                        <p className="text-xs text-white/70 mt-0.5">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollTo("about")}
            className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors group"
            aria-label="Scroll down"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
