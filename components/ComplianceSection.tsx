"use client";

import { CheckCircle2, ShieldCheck, Info } from "lucide-react";

const complianceItems = [
  {
    title: "Enhanced DBS Checks",
    description: "All staff hold current Enhanced Disclosure and Barring Service certificates, renewed regularly.",
  },
  {
    title: "Right to Work Verification",
    description: "We conduct thorough checks to confirm every candidate is legally entitled to work in the UK.",
  },
  {
    title: "Employment Reference Checks",
    description: "Minimum two professional references are verified for all healthcare workers before placement.",
  },
  {
    title: "Mandatory Training Completion",
    description: "Moving & Handling, Infection Control, Safeguarding, First Aid, and Medication Awareness as standard.",
  },
  {
    title: "Ongoing Staff Supervision",
    description: "Regular check-ins and performance reviews ensure continuous quality and professional development.",
  },
  {
    title: "Incident Reporting Procedures",
    description: "Clear incident and near-miss reporting protocols are embedded in all placements and shift handovers.",
  },
  {
    title: "Safeguarding Compliance",
    description: "All staff receive safeguarding training at Level 2 minimum, with senior staff trained to Level 3.",
  },
];

export default function ComplianceSection() {
  return (
    <section id="compliance" className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="section-badge">
            <ShieldCheck className="w-3.5 h-3.5" />
            Quality Assurance
          </div>
          <h2 className="section-heading">
            Compliance &amp;{" "}
            <span className="gradient-text">Quality Assurance</span>
          </h2>
          <p className="section-subheading">
            Every BritePath placement meets rigorous compliance standards because your clients
            deserve nothing less. Our processes are designed with CQC guidance at their core.
          </p>
        </div>

        {/* Compliance grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {complianceItems.map(({ title, description }) => (
            <div
              key={title}
              className="flex gap-4 p-5 rounded-2xl border border-gray-200 bg-white hover:border-[#2FA4A9] hover:shadow-sm transition-all duration-200 group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors"
                style={{ backgroundColor: "#EAF7F8" }}
              >
                <CheckCircle2 className="w-5 h-5" style={{ color: "#2FA4A9" }} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CQC note */}
        <div
          className="flex gap-4 p-6 rounded-2xl border"
          style={{
            backgroundColor: "#EEF2F8",
            borderColor: "#D5DFF0",
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{ backgroundColor: "#1F3A5F" }}
          >
            <Info className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-1" style={{ color: "#1F3A5F" }}>
              CQC Aligned Compliance Framework
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              BritePath Health Care Staffing operates in alignment with the Care Quality Commission
              (CQC) regulations and fundamental standards. We support providers in meeting their
              own CQC obligations by supplying staff who are trained, supervised, and fully
              documented, giving inspectors confidence and giving you peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
