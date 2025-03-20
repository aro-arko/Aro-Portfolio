"use client";

import { useEffect, useState } from "react";
import projectData from "@/fakeData/Projects.json";
import ProjectCard from "../../Projects/ProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion"; // Import Framer Motion

const FeaturedProjects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delayed appearance effect
    setTimeout(() => {
      setIsVisible(true);
    }, 200); // Delay before animation starts
  }, []);

  const featuredProjects = [...projectData]
    .sort((a, b) => b.id - a.id)
    .slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-7xl mx-auto py-12"
    >
      <h2 className="text-4xl font-bold text-center mb-8">Latest Projects</h2>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        className="flex justify-center mt-8"
      >
        <Link href="/projects">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-8 transition">
            View All Projects
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default FeaturedProjects;
