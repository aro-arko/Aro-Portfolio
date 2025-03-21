"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

import profileImage from "@/assets/images/profileImage.jpg";
import Link from "next/link";

const Banner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white pt-16 pb-4"
    >
      <div className="max-w-7xl mx-auto px-6 py md:py-10 lg:px-8 md:shadow-md md:rounded-xl md:bg-white md:border md:border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center md:py-8">
          <div className="bg-white rounded-xl shadow-lg px-6 py-8 flex flex-col items-center text-center space-y-8  border border-gray-100">
            {/* Box-Shaped Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-48 h-48 rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={profileImage}
                alt="Abidur Rahman Arko"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Name and Handle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h1 className="text-2xl font-bold text-gray-900">
                Abidur Rahman Arko
              </h1>
              <p className="text-lg text-gray-600">@aroarko</p>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex space-x-4"
            >
              <a
                href="https://github.com/aroarko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/aroarko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/aroarko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/aroarko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </motion.div>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-md flex items-center justify-center space-x-2 transition-all">
                <Download className="h-5 w-5" />
                <span>Download CV</span>
              </Button>
            </motion.div>
          </div>

          {/* Right Side: Details (Takes 2/3rd of the width) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 md:ml-6 space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-800">
              Hi, <br />
              I&apos;m a MERN Stack Developer
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              Expertise in building modern, scalable, and user-friendly web
              applications using <strong>TypeScript</strong>,{" "}
              <strong>React.js</strong>, <strong>Next.js</strong>,{" "}
              <strong>Redux</strong>, <strong>MongoDB</strong>,{" "}
              <strong>Express.js</strong>, and <strong>Node.js</strong>.
              Committed to clean code, efficient state management, and seamless
              user experiences, ensuring high-performance applications that
              scale effortlessly. <br />
            </p>
            <div className="flex space-x-4">
              <Link href="/projects">
                <Button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md flex items-center space-x-2 transition-all cursor-pointer">
                  <span>View Projects</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md flex items-center space-x-2 transition-all cursor-pointer"
                >
                  <span>Contact Me</span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Banner;
