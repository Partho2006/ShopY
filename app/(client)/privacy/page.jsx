"use client";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Page Header */}
      <h1 className="text-4xl font-bold mb-6 text-center text-shop_dark_green">
        Privacy Policy
      </h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Your privacy is important to us. This Privacy Policy explains how we
        collect, use, and protect your personal information when you shop with
        us.
      </p>

      {/* Sections */}
      <div className="space-y-8">
        {[
          {
            title: "1. Information We Collect",
            content: (
              <>
                <p className="text-gray-700 mb-2">
                  We may collect the following types of information when you use
                  our website:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    Personal details such as name, email, phone number, and
                    address
                  </li>
                  <li>
                    Payment information (processed securely by payment gateways)
                  </li>
                  <li>
                    Browsing data such as pages visited, time spent, and
                    preferences
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "2. How We Use Your Information",
            content: (
              <>
                <p className="text-gray-700 mb-2">We use your information to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Process and deliver your orders</li>
                  <li>Communicate order updates, offers, and support</li>
                  <li>Improve our website, services, and user experience</li>
                  <li>Ensure secure transactions and fraud prevention</li>
                </ul>
              </>
            ),
          },
          {
            title: "3. Sharing of Information",
            content: (
              <p className="text-gray-700">
                We do not sell or rent your personal information to third
                parties. We may share limited information only with trusted
                partners such as delivery providers, payment gateways, or legal
                authorities (if required by law).
              </p>
            ),
          },
          {
            title: "4. Data Security",
            content: (
              <p className="text-gray-700">
                We use industry-standard encryption and security practices to
                protect your personal data. However, no method of transmission
                over the internet is 100% secure, so we cannot guarantee
                absolute security.
              </p>
            ),
          },
          {
            title: "5. Cookies & Tracking",
            content: (
              <p className="text-gray-700">
                Our site uses cookies to enhance your shopping experience.
                Cookies help us remember your preferences, recommend products,
                and analyze site performance. You can manage cookies in your
                browser settings.
              </p>
            ),
          },
          {
            title: "6. Your Rights",
            content: (
              <>
                <p className="text-gray-700 mb-2">
                  As a user, you have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    Access the personal information we store about you
                  </li>
                  <li>
                    Request corrections to your personal information
                  </li>
                  <li>
                    Request deletion of your account and data (subject to legal
                    obligations)
                  </li>
                  <li>Opt out of marketing communications at any time</li>
                </ul>
              </>
            ),
          },
          {
            title: "7. Policy Updates",
            content: (
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. Any changes
                will be reflected on this page with an updated revision date.
                Continued use of our website after changes means you accept the
                updated policy.
              </p>
            ),
          },
        ].map((section, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            <h2 className="text-xl font-semibold mb-3 text-shop_dark_green">
              {section.title}
            </h2>
            <div className="leading-relaxed">{section.content}</div>
          </div>
        ))}

        {/* Contact Section */}
        <div className="p-6 rounded-xl border border-shop_light_green shadow-md bg-shop_light_green/10">
          <h2 className="text-xl font-semibold mb-3 text-shop_dark_green">
            8. Contact Us
          </h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy or how we handle
            your data, please contact us:
          </p>
          <ul className="text-gray-800 list-disc list-inside mt-2 space-y-1">
            <li>
              Email:{" "}
              <a
                href="mailto:parthojotyroychowdhury@gmail.com"
                className="text-shop_dark_green hover:underline"
              >
                parthojotyroychowdhury@gmail.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <span className="text-shop_dark_green">+91 123-456-7890</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
