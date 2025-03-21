"use client";

import Link from "next/link";
import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand / About */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">
            <span className="text-gray-300">Ar</span>
            <span className="text-blue-600">o</span>
          </h2>
          <p className="text-sm text-gray-400">
            Passionate developer focused on building web applications and
            creative user experiences. Let’s create something amazing together!
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:aroarko.sd@gmail.com"
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-400">aroarko.sd@gmail.com</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className="text-sm text-gray-400 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-sm text-gray-400 hover:text-blue-600 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="text-sm text-gray-400 hover:text-blue-600 transition-colors"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-sm text-gray-400 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to my newsletter for the latest updates and insights.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              setTimeout(() => setSubmitted(false), 5000); // Optional: Hide after 5 seconds
            }}
            className="flex flex-col gap-3"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <Button
              type="submit"
              className="rounded-lg w-1/3 px-4 py-1 text-sm bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </Button>

            {submitted && (
              <p className="text-green-500 text-sm mt-1">
                ✅ Subscription successful. Thank you!
              </p>
            )}
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Connect</h3>
          <ul className="flex gap-5">
            <li>
              <a
                href="https://github.com/aro-arko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/aroarko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/aroarko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/aroarko28"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-16 border-t h-10 flex items-center justify-center  border-gray-800">
        <p className="my-auto">
          © {new Date().getFullYear()} Arko. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
