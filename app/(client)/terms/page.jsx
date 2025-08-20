"use client";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Page Header */}
      <h1 className="text-4xl font-bold mb-6 text-center text-shop_dark_green">
        Terms & Conditions
      </h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Please read these Terms & Conditions carefully before using our website. 
        By accessing or purchasing from our store, you agree to be bound by these terms. 
        If you do not agree, please do not use our services.
      </p>

      {/* Sections */}
      <div className="space-y-8">
        {[
          {
            title: "1. Eligibility",
            text: "By using this website, you confirm that you are at least 18 years old or accessing the site under the supervision of a parent or guardian. You are responsible for maintaining the confidentiality of your account details and password."
          },
          {
            title: "2. Use of Website",
            text: "You agree to use this site only for lawful purposes. You may not attempt to gain unauthorized access, interfere with operations, or misuse the platform in any way that harms our business or other customers."
          },
          {
            title: "3. Product Information",
            text: "We strive to display product details, descriptions, and pricing as accurately as possible. However, errors may occur. We reserve the right to correct any inaccuracies and update information without prior notice."
          },
          {
            title: "4. Orders & Payments",
            text: "All orders are subject to acceptance and availability. We reserve the right to cancel any order if the product is out of stock, incorrectly priced, or if fraud is suspected. Payments must be made through approved methods listed at checkout."
          },
          {
            title: "5. Shipping & Delivery",
            text: "Delivery timelines are estimates and may vary based on location, logistics, and unforeseen circumstances. We are not liable for delays outside our control but will make every effort to deliver promptly."
          },
          {
            title: "6. Returns & Refunds",
            text: "Returns are accepted within 7 days of delivery for unused items in original packaging. Refunds are processed within 5–7 business days to the original payment method, subject to our return policy."
          },
          {
            title: "7. Intellectual Property",
            text: "All content, logos, designs, and materials on this website are the property of our company and may not be used, reproduced, or distributed without prior written permission."
          },
          {
            title: "8. Limitation of Liability",
            text: "We are not liable for any indirect, incidental, or consequential damages arising from your use of our services. Our liability is limited to the value of the product purchased."
          },
          {
            title: "9. Changes to Terms",
            text: "We reserve the right to update these Terms & Conditions at any time. Continued use of our services after updates means you accept the revised terms."
          },
        ].map((section, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            <h2 className="text-xl font-semibold mb-3 text-shop_dark_green">
              {section.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{section.text}</p>
          </div>
        ))}

        {/* Contact Section */}
        <div className="p-6 rounded-xl border border-shop_light_green shadow-md bg-shop_light_green/10">
          <h2 className="text-xl font-semibold mb-3 text-shop_dark_green">
            10. Contact Us
          </h2>
          <p className="text-gray-700">
            If you have any questions about these Terms & Conditions, please contact us:
          </p>
          <ul className="text-gray-800 list-disc list-inside mt-2 space-y-1">
            <li>Email: <a href="mailto:parthojotyroychowdhury@gmail.com" className="text-shop_dark_green hover:underline">parthojotyroychowdhury@gmail.com</a></li>
            <li>Phone: <span className="text-shop_dark_green">+91 123-456-7890</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
