"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import projectData from "@/fakeData/Projects.json";
import ProjectCard from "../../Projects/ProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FeaturedProjects = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) setHasAnimated(true);
  }, [isInView]);

  const featuredProjects = [...projectData]
    .sort((a, b) => b.id - a.id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Latest Projects</h2>
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/projects">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-8 transition">
              View All Projects
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedProjects;
