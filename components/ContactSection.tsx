"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Users, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry: "book-staff",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-badge">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="section-heading">
            Contact{" "}
            <span className="gradient-text">Us</span>
          </h2>
          <p className="section-subheading mx-auto text-center">
            Whether you need to book staff, discuss a long-term partnership, or join our team,
            we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            {/* Company card */}
            <div
              className="rounded-2xl p-6"
              style={{ background: "linear-gradient(135deg, #1F3A5F 0%, #1a4a6e 100%)" }}
            >
              <h3 className="text-white font-bold text-lg mb-1">
                BritePath Health Care Staffing Ltd
              </h3>
              <p className="text-blue-200/70 text-sm mb-6">
                Your trusted healthcare staffing partner across Oxfordshire.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(47,164,169,0.2)" }}
                  >
                    <MapPin className="w-4 h-4" style={{ color: "#2FA4A9" }} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white/60 mb-0.5">Address</p>
                    <p className="text-sm text-white">Oxfordshire, United Kingdom</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(47,164,169,0.2)" }}
                  >
                    <Mail className="w-4 h-4" style={{ color: "#2FA4A9" }} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white/60 mb-0.5">Email</p>
                    <a
                      href="mailto:info@britepathcare.co.uk"
                      className="text-sm text-white hover:text-[#2FA4A9] transition-colors"
                    >
                      info@britepathcare.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(47,164,169,0.2)" }}
                  >
                    <Phone className="w-4 h-4" style={{ color: "#2FA4A9" }} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white/60 mb-0.5">Phone</p>
                    <a
                      href="tel:+447714397864"
                      className="text-sm text-white hover:text-[#2FA4A9] transition-colors"
                    >
                      +44 7714 397864
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action cards */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setFormData((p) => ({ ...p, enquiry: "book-staff" }));
                  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="ui-card p-4 text-left group"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#EEF2F8" }}
                >
                  <Users className="w-4 h-4" style={{ color: "#1F3A5F" }} />
                </div>
                <p className="text-xs font-semibold text-gray-900">Book Staff</p>
                <p className="text-xs text-gray-500 mt-0.5">Request a placement</p>
              </button>
              <button
                onClick={() => {
                  setFormData((p) => ({ ...p, enquiry: "join-team" }));
                  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="ui-card p-4 text-left group"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#EAF7F8" }}
                >
                  <Send className="w-4 h-4" style={{ color: "#2FA4A9" }} />
                </div>
                <p className="text-xs font-semibold text-gray-900">Apply Now</p>
                <p className="text-xs text-gray-500 mt-0.5">Join our team</p>
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="ui-card p-8" id="contact-form">
              {submitted ? (
                <div className="text-center py-10">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: "#EAF7F8" }}
                  >
                    <CheckCircle className="w-8 h-8" style={{ color: "#2FA4A9" }} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm max-w-sm mx-auto">
                    Thank you for reaching out. A member of our team will be in touch with you
                    shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", enquiry: "book-staff", message: "" });
                    }}
                    className="mt-6 text-sm font-medium transition-colors"
                    style={{ color: "#2FA4A9" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="ui-label">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Smith"
                        value={formData.name}
                        onChange={handleChange}
                        className="ui-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="ui-label">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="ui-input"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="ui-label">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="07700 000000"
                        value={formData.phone}
                        onChange={handleChange}
                        className="ui-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="enquiry" className="ui-label">
                        Enquiry Type <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="enquiry"
                        name="enquiry"
                        required
                        value={formData.enquiry}
                        onChange={handleChange}
                        className="ui-input bg-white"
                      >
                        <option value="book-staff">Book Staff</option>
                        <option value="join-team">Join Our Team</option>
                        <option value="block-booking">Block Booking Enquiry</option>
                        <option value="emergency">Emergency Cover</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="ui-label">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={handleChange}
                      className="ui-input resize-none"
                    />
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                      style={{ backgroundColor: "#2FA4A9" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#268589";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2FA4A9";
                      }}
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData((p) => ({ ...p, enquiry: "book-staff" }));
                        (document.getElementById("contact-form") as HTMLFormElement | null)?.requestSubmit?.();
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl border-2 transition-all duration-200 hover:-translate-y-0.5"
                      style={{ borderColor: "#1F3A5F", color: "#1F3A5F" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1F3A5F";
                        (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                        (e.currentTarget as HTMLButtonElement).style.color = "#1F3A5F";
                      }}
                    >
                      <Users className="w-4 h-4" />
                      Book Staff
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
