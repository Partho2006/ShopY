"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "parthojotyroychowdhury@gmail.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+12 958 648 597",
      description: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "West Bengal, India",
      description: "Our flagship showroom",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 5:00 PM",
      description: "Weekend: 10AM - 4PM",
    },
  ];

  return (
    <div className="bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-shop_light_green/20 to-shop_dark_green/10">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-shop_dark_green mb-6 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            We're here to help with any questions about our products, orders, or services. Reach out and we'll respond as quickly as possible.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-shop_dark_green">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {["name", "email", "subject"].map((field, idx) => (
                    <div key={idx}>
                      <Label htmlFor={field} className="text-gray-700 font-medium capitalize">
                        {field === "email" ? "Email Address" : field === "name" ? "Full Name" : "Subject"}
                      </Label>
                      <Input
                        id={field}
                        type={field === "email" ? "email" : "text"}
                        placeholder={field === "email" ? "your.email@example.com" : `Your ${field}`}
                        value={formData[field]}
                        onChange={(e) => handleInputChange(field, e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  ))}

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      required
                      className="mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-shop_light_green hover:bg-shop_dark_green text-white font-semibold py-4 px-6 rounded-2xl flex items-center justify-center transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="mb-8 text-center lg:text-left">
                <h2 className="text-2xl font-bold text-shop_dark_green mb-4">Contact Information</h2>
                <p className="text-gray-600">
                  Choose the best way to reach us. We're always happy to help!
                </p>
              </div>

              {contactInfo.map((info, idx) => (
                <Card key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-shop_light_green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-shop_dark_green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-shop_dark_green mb-1">{info.title}</h3>
                      <p className="text-gray-800 font-medium mb-1">{info.details}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* FAQ Card */}
              <Card className="bg-shop_light_green text-white rounded-2xl shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold mb-2 text-lg">Frequently Asked Questions</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Find quick answers to common questions about orders, shipping, and returns.
                  </p>
                  <Link href="/faqs" className="inline-block bg-shop_dark_green hover:bg-shop_light_green text-white font-semibold px-4 py-2 rounded-lg transition-all">
                    View FAQ
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
