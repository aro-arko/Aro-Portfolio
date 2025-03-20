"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { motion } from "framer-motion";
// import Image from "next/image";
import { useEffect, useState } from "react";

// Fake data for now (Replace this with API data later)
const fakeExperienceData = [
  {
    id: 1,
    title: "Student Ambassador",
    company: "UCSI University",
    type: "Contract",
    duration: "Jun 2024 - Present · 10 mos",
    location: "WP. Kuala Lumpur, Malaysia · On-site",
    logo: "/ucsi-logo.png", // Replace with your actual image URL
  },
  {
    id: 2,
    title: "User Experience Designer",
    company: "Solution Drift",
    type: "Internship",
    duration: "Sep 2023 - Dec 2023 · 4 mos",
    location: "Kishoreganj, Dhaka, Bangladesh · On-site",
    logo: "/solution-drift-logo.png", // Replace with your actual image URL
  },
];

const Experience = () => {
  const [experiences, setExperiences] = useState(fakeExperienceData);

  // Fetch from backend later (Simulating API call)
  useEffect(() => {
    // Example: Fetch from an API when ready
    // fetch("/api/experience")
    //   .then((res) => res.json())
    //   .then((data) => setExperiences(data));

    // For now, using fake data
    setExperiences(fakeExperienceData);
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full space-y-8"
      >
        <div className="max-w-6xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
                <CardHeader className="flex items-center space-x-4">
                  {/* Company Logo */}
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-lg overflow-hidden">
                    {/* <Image
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-contain"
                  /> */}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400 mt-1">
                      {exp.company} · {exp.type}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="px-6">
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Duration:</strong> {exp.duration}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    <strong>Location:</strong> {exp.location}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Experience;
