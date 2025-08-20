"use client";

import { useState } from "react";

const faqs = [
  {
    category: "Account & Profile",
    questions: [
      { q: "How do I create an account?", a: "Click on the Sign Up button, enter your details, and verify your email." },
      { q: "How do I log in?", a: "Use your registered email and password. You can also log in via Google/Phone if available." },
      { q: "Forgot password?", a: "Click “Forgot Password” on the login screen and follow the reset steps." },
    ],
  },
  {
    category: "Orders & Payments",
    questions: [
      { q: "How do I place an order?", a: "Browse products, add them to your cart, and proceed to checkout." },
      { q: "What payment methods are accepted?", a: "We accept credit/debit cards, UPI, net banking, and cash on delivery (where available)." },
      { q: "Can I modify or cancel an order?", a: "Orders can be modified/canceled before they are shipped. Visit My Orders to manage them." },
    ],
  },
  {
    category: "Shipping & Delivery",
    questions: [
      { q: "When will my order arrive?", a: "Delivery usually takes 3–7 business days, depending on your location." },
      { q: "How do I track my order?", a: "Go to My Orders and click “Track” to see live updates." },
      { q: "Do you ship internationally?", a: "Currently, we ship within India. International shipping may be available soon." },
    ],
  },
  {
    category: "Returns & Refunds",
    questions: [
      { q: "What is your return policy?", a: "You can return products within 7 days of delivery if unused and in original packaging." },
      { q: "How do I request a return?", a: "Go to My Orders, select the product, and click “Request Return.”" },
      { q: "How long do refunds take?", a: "Refunds are processed within 5–7 business days to your original payment method." },
    ],
  },
  {
    category: "Product & Warranty",
    questions: [
      { q: "Are products genuine?", a: "Yes, we only sell 100% authentic and quality-checked products." },
      { q: "Do products come with a warranty?", a: "Many items include a manufacturer’s warranty—details are listed on the product page." },
      { q: "What if I receive a damaged item?", a: "Please raise a return request immediately, and we’ll arrange a replacement/refund." },
    ],
  },
  {
    category: "Security & Payments",
    questions: [
      { q: "Is shopping secure?", a: "Yes, all payments are encrypted with industry-standard security." },
      { q: "Do you store my card details?", a: "No, we do not store sensitive card information. Transactions are handled by secure payment gateways." },
    ],
  },
];

function Accordion({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-shop_dark_green transition-colors"
      >
        {question}
        <span className="text-shop_dark_green font-bold">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="mt-2 text-gray-600 leading-relaxed">{answer}</p>}
    </div>
  );
}

export default function HelpPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-center text-shop_dark_green">
        Help Center
      </h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        We’re here to make your shopping experience smooth and hassle-free.  
        Browse through the FAQs below or reach out to our support team anytime.
      </p>

      {/* FAQ Sections */}
      {faqs.map((section, index) => (
        <div
          key={index}
          className="mb-10 rounded-xl shadow-sm border border-gray-200 bg-white hover:shadow-md transition-all duration-200"
        >
          <h2 className="text-xl font-semibold px-6 py-4 bg-shop_light_green/20 text-shop_dark_green rounded-t-xl">
            {section.category}
          </h2>
          <div className="px-6 pb-4">
            {section.questions.map((item, i) => (
              <Accordion key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      ))}

      {/* Contact Support */}
      <div className="mt-12 p-8 bg-shop_light_green/20 border border-shop_light_green rounded-2xl text-center shadow">
        <h2 className="text-2xl font-bold mb-3 text-shop_dark_green">
          Still need help?
        </h2>
        <p className="text-gray-700 mb-5">
          Our customer support team is always ready to assist you.
        </p>
        <ul className="space-y-2 text-gray-800">
          <li>📧 <strong>Email:</strong>{" "}
            <a href="mailto:parthojotyroychowdhury@gmail.com" className="text-shop_dark_green hover:underline">
              parthojotyroychowdhury@gmail.com
            </a>
          </li>
          <li>☎️ <strong>Phone:</strong> <span className="text-shop_dark_green">+91 123-456-7890</span></li>
          <li>💬 <strong>Live Chat:</strong> Available 9 AM – 9 PM IST</li>
        </ul>
      </div>
    </div>
  );
}
