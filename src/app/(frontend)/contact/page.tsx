"use client";

import React, { useState } from "react";
import PageHero from "@/components/Nav/PageHero";
import {
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const faqs = [
    {
      question: "Can I submit my own eco micro stories?",
      answer:
        "We are always thrilled to collaborate with fellow climate warriors and storytellers! Please drop us an email with your submission outline, and we'll get back to you with our contributor guidelines.",
    },
    {
      question: "How often are new micro tales published?",
      answer:
        "We publish new micro tales on a weekly basis, covering various environmental themes like wildlife conservation, climate action, biodiversity, and green living.",
    },
    {
      question: "Can I use these stories for education or presentations?",
      answer:
        "Yes, absolutely! All our stories are meant to inspire change. You are free to share and use them for non-commercial educational purposes, presentations, and awareness campaigns, provided you attribute Eco Micro Tales.",
    },
    {
      question: "How can I support the Eco Micro Tales mission?",
      answer:
        "The best way to support us is by sharing our stories with your network to raise awareness. You can also follow us on social media and take daily eco-friendly actions in your own life.",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#eff1ed] text-brand-dark">
      {/* Page Hero */}
      <PageHero
        title="Contact Us"
        imageSrc="/artempodrez.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand/15 border border-brand/30 px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-brand"></span>
                <span className="text-sm font-semibold tracking-wide uppercase text-brand-dark/80">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight mb-4">
                Let's Start a <br />
                <span className="text-[#3b7d20]">Conversation</span>
              </h2>
              <p className="text-brand-dark/70 text-base md:text-lg leading-relaxed">
                Whether you have questions, feedback, partnership ideas, or want
                to share your own micro tales—we would love to hear from you.
              </p>
            </div>

            {/* Contact Details Stack */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-xs flex items-start gap-4">
                <div className="bg-brand/15 p-3 rounded-xl text-[#3b7d20] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-brand-dark/50 font-bold mb-1">
                    Email Address
                  </h4>
                  <a
                    href="mailto:syedaridafatima426@gmail.com"
                    className="text-lg font-bold hover:text-[#3b7d20] transition-colors break-all"
                  >
                    syedaridafatima426@gmail.com
                  </a>
                  <p className="text-xs text-brand-dark/40 mt-1">
                    Click to send us an email directly
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-xs flex items-start gap-4">
                <div className="bg-brand/15 p-3 rounded-xl text-[#3b7d20] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-brand-dark/50 font-bold mb-1">
                    Phone Number
                  </h4>
                  <a
                    href="tel:03144335821"
                    className="text-lg font-bold hover:text-[#3b7d20] transition-colors"
                  >
                    0314-4335821
                  </a>
                  <p className="text-xs text-brand-dark/40 mt-1">
                    Call or text us for direct inquiries
                  </p>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-xs flex items-start gap-4">
                <div className="bg-brand/15 p-3 rounded-xl text-[#3b7d20] shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-brand-dark/50 font-bold mb-1">
                    Response Hours
                  </h4>
                  <p className="text-lg font-bold text-brand-dark">
                    Within 24 Hours
                  </p>
                  <p className="text-xs text-brand-dark/40 mt-1">
                    We strive to reply as quickly as possible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white border-t border-b border-[#eff1ed] py-20 md:py-28 w-full">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-dark/5 p-3 rounded-2xl text-brand-dark mb-4">
              <MessageSquare size={20} />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-brand-dark/70 text-base md:text-lg">
              Got questions about submissions, sharing stories, or
              collaborating? Here are some quick answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-neutral-100 rounded-2xl overflow-hidden bg-[#eff1ed]/20 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left font-bold text-lg text-brand-dark hover:bg-[#eff1ed]/40 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`text-[#3b7d20] transition-transform duration-300 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "max-h-[500px] border-t border-neutral-100/60"
                        : "max-h-0"
                    }`}
                  >
                    <div className="p-6 text-[#142311]/80 text-sm md:text-base leading-relaxed bg-white">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
