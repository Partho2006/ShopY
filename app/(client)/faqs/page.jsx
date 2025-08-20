"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How do I create an account?",
    a: "Click on the Sign Up button, fill in your details, and verify your email to activate your account."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit/debit cards, UPI, net banking, and cash on delivery in selected locations."
  },
  {
    q: "How can I track my order?",
    a: "Go to My Orders, select your order, and click 'Track' to see the latest shipping updates."
  },
  {
    q: "What is your return policy?",
    a: "You can return most items within 7 days of delivery, provided they are unused and in original packaging."
  },
  {
    q: "How long does delivery take?",
    a: "Delivery usually takes 3–7 business days depending on your location and product availability."
  },
  {
    q: "Do you offer international shipping?",
    a: "Currently, we only ship within India. International shipping will be available soon."
  },
  {
    q: "How do I reset my password?",
    a: "Click on 'Forgot Password' at login and follow the instructions to set a new password."
  },
  {
    q: "Are my payments secure?",
    a: "Yes, all transactions are encrypted and processed through secure payment gateways."
  }
];

function Accordion({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left font-medium text-shop_dark_green text-lg hover:text-shop_light_green transition-colors"
      >
        {question}
        <span className="text-2xl font-bold">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="mt-3 text-gray-700">{answer}</p>}
    </div>
  );
}

export default function FAQPage() {
  const [search, setSearch] = useState("");

  const filteredFaqs = faqs.filter(
    (item) =>
      item.q.toLowerCase().includes(search.toLowerCase()) ||
      item.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#fafafa] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-shop_dark_green mb-4 tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-700">
          Find quick answers to the most common questions about shopping, payments, shipping, and more.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search FAQs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shop_light_green shadow-sm transition-all"
        />
      </div>

      {/* FAQs */}
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((item, i) => (
            <Accordion key={i} question={item.q} answer={item.a} />
          ))
        ) : (
          <p className="p-6 text-gray-500 text-center">No results found. Try another keyword.</p>
        )}
      </div>

      {/* Support Section */}
      <div className="max-w-3xl mx-auto mt-16 bg-gradient-to-r from-shop_light_green/20 to-shop_dark_green/10 rounded-3xl p-8 text-center shadow-lg">
        <h2 className="text-2xl font-bold text-shop_dark_green mb-3">Still have a question?</h2>
        <p className="text-gray-700 mb-4">
          If you can’t find the answer you’re looking for, please reach out to our support team.
        </p>
        <p className="text-shop_dark_green font-semibold mb-2">
          📧 Email: parthojotyroychowdhury@gmail.com
        </p>
        <p className="text-shop_dark_green font-semibold">
          ☎️ Phone: +91 123-456-7890
        </p>
      </div>
    </div>
  );
}
