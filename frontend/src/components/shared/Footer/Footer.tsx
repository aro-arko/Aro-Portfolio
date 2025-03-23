"use client";

import Link from "next/link";
import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
          <div className="flex items-start gap-2 flex-col sm:flex-row sm:items-center">
            <a
              href="mailto:aroarko.sd@gmail.com"
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-400 break-all">
              aroarko.sd@gmail.com
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {["/", "/projects", "/blogs", "#contact"].map((path, index) => (
              <li key={path}>
                <Link
                  href={path}
                  className="text-sm text-gray-400 hover:text-blue-600 transition-colors"
                >
                  {["Home", "Projects", "Blogs", "Contact"][index]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to my newsletter for the latest updates and insights.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              setTimeout(() => setSubmitted(false), 5000);
            }}
            className="flex flex-col sm:flex-row sm:items-center gap-3"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <Button
              type="submit"
              className="rounded-lg px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </Button>
          </form>
          {submitted && (
            <p className="text-green-500 text-sm mt-2">
              ✅ Subscription successful. Thank you!
            </p>
          )}
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
          <ul className="flex flex-wrap gap-5">
            {[
              ["https://github.com/aro-arko", Github],
              ["https://linkedin.com/in/aroarko", Linkedin],
              ["https://instagram.com/aroarko", Instagram],
              ["https://facebook.com/aroarko28", Facebook],
            ].map(([link, Icon], index) => (
              <li key={index}>
                <Link
                  href={link as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-12 py-4 border-t border-gray-800">
        © {new Date().getFullYear()} Arko. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
