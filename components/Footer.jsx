import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { quickLinksData, categoriesData } from "@/constants/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        {/* Top Info Section with Gradient */}
        <FooterTop />

        {/* Middle Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-t border-gray-700">
          {/* About / Logo */}
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-400">
              Welcome to Shopy, your one-stop destination for the latest trends
              and unbeatable deals.
            </p>
            <SocialMedia />
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-bold text-xl text-white mb-4">Quick Links</h2>
            <ul className="space-y-3">
              {quickLinksData.map((item) => (
                <li
                  key={item.title}
                  className="hover:text-shop_light_green transition-colors duration-300"
                >
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h2 className="font-bold text-xl text-white mb-4">Categories</h2>
            <ul className="space-y-3">
              {categoriesData.map((item) => (
                <li
                  key={item.title}
                  className="hover:text-shop_light_green transition-colors duration-300"
                >
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h2 className="font-bold text-xl text-white mb-4">Contact Us</h2>
            <Link
              href="https://x.com/partho221"
              target="_blank"
              className="hover:text-shop_light_green transition-colors duration-300"
            >
              <p>Follow me on X for exclusive info about my future projects.</p>
            </Link>
            <Link
              href="https://www.youtube.com/@PryRice"
              target="_blank"
              className="hover:text-shop_light_green transition-colors duration-300"
            >
              <p>Subscribe to me on YouTube.</p>
            </Link>
            <p className="mt-4 font-bold text-white">
              Author — Parthojoty Roy Chowdhury
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-700 text-center text-sm text-gray-400">
          ©2025 <Logo className="inline text-sm" />. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
