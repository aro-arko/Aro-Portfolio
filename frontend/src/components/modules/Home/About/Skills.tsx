"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import Image from "next/image";
import { getSkills } from "@/services/skillServices";
import Loading from "../../Loading/Loading";

interface ISkill {
  _id: string;
  title: string;
  icon: string;
  category: "frontend" | "backend";
}

const Skills = () => {
  const [frontendSkills, setFrontendSkills] = useState<ISkill[]>([]);
  const [backendSkills, setBackendSkills] = useState<ISkill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await getSkills();
        const allSkills: ISkill[] = res?.data || [];

        setFrontendSkills(allSkills.filter((s) => s.category === "frontend"));
        setBackendSkills(allSkills.filter((s) => s.category === "backend"));
      } catch (error) {
        console.error("Error fetching skills:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="space-y-8 w-full"
      >
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Frontend Skills */}
          <motion.div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-300">
              Frontend Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={skill._id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillCard
                    title={skill.title}
                    icon={
                      <Image
                        src={skill.icon}
                        alt={skill.title}
                        width={40}
                        height={40}
                        className="w-8 h-8 object-contain"
                      />
                    }
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-300">
              Backend Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={skill._id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillCard
                    title={skill.title}
                    icon={
                      <Image
                        src={skill.icon}
                        alt={skill.title}
                        width={40}
                        height={40}
                        className="w-8 h-8 object-contain"
                      />
                    }
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Skills;
