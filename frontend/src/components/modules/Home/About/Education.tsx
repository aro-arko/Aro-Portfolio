"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { GraduationCap, School } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="space-y-8 w-full">
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>

      {/* Bachelor's Degree */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Card className="w-full border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
          <CardHeader className="flex items-center space-x-4">
            <div className="bg-blue-100 dark:bg-gray-700 p-3 rounded-lg">
              <GraduationCap className="w-8 h-8 text-blue-600 dark:text-white" />
            </div>
            <div>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                Bachelor of Computer Science (Honours)
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400 mt-1">
                UCSI University, Kuala Lumpur, Malaysia
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="px-6">
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Duration:</strong> September 2022 - Present
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              <strong>Current CGPA:</strong> 3.53
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Higher Secondary School */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Card className="w-full border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
          <CardHeader className="flex items-center space-x-4">
            <div className="bg-blue-100 dark:bg-gray-700 p-3 rounded-lg">
              <School className="w-8 h-8 text-blue-600 dark:text-white" />
            </div>
            <div>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                Higher Secondary School
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400 mt-1">
                Gurudayal Govt. College, Kishoreganj, Bangladesh
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="px-6">
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Duration:</strong> July 2019 - February 2022
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              <strong>GPA:</strong> 5.00 out of 5.00
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Education;
