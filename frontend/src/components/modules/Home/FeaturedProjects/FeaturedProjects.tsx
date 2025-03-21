"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProjectCard from "../../Projects/ProjectCard";
import { IProject } from "@/types/project.type";
import { getProjects } from "@/services/projectServices";

const FeaturedProjects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProjects();
      if (response?.success && response.data) {
        setProjects(response.data);
      }
    };
    fetchData();
  }, []);

  const featuredProjects = [...projects]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
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
