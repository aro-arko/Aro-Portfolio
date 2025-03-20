"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white shadow-md fixed top-0 left-1/2 -translate-x-1/2 z-50 max-w-7xl w-full px-6 py-3 border border-gray-200 rounded-xl"
    >
      <div className="flex justify-between items-center mx-auto max-w-6xl w-full">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-bold tracking-wide">
            <span className="text-gray-900">Ar</span>
            <span className="text-blue-500">o</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/blogs"
            className="text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors"
          >
            Blogs
          </Link>
          <Link
            href="#about"
            className="text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors"
          >
            About
          </Link>
        </div>

        {/* Call-to-Action Button */}
        <div className="hidden md:flex">
          <Button className="bg-blue-600 hover:bg-blue-500 text-white py-4 px-6 rounded-md flex items-center space-x-2 transition-all">
            Let’s Talk
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden">
          <Button variant="ghost" onClick={toggleMenu}>
            {isOpen ? (
              <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="h-6 w-6 transition-transform duration-300" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden mt-4 bg-white rounded-lg p-4 border border-gray-200 shadow-lg"
          >
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="block text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/blogs"
                className="block text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="#about"
                className="block text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors"
              >
                About
              </Link>
            </div>

            {/* Call-to-Action Button for Mobile */}
            <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-md flex items-center justify-center space-x-2 mt-3 transition-all">
              <span>Let’s Talk</span>
              <ArrowUpRight size={16} />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
