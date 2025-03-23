"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getExperieces } from "@/services/experienceServices";
import Loading from "../../Loading/Loading";

interface ExperienceItem {
  _id: string;
  title: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  logo: string;
}

const Experience = () => {
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getExperieces();
      if (response?.success && response.data) {
        setExperiences(response.data);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <Loading />;

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
              key={exp._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
                <CardHeader className="flex items-center space-x-4">
                  <div className="w-12 h-12 relative rounded-lg overflow-hidden border-3 border-blue-50">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
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
