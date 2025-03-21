"use client";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaCode,
  FaLock,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiShadcnui,
} from "react-icons/si";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const Skills = () => {
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
          <motion.div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-300">
              Frontend Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillCard title={skill.title} icon={skill.icon} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-300">
              Backend Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillCard title={skill.title} icon={skill.icon} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

const frontendSkills = [
  { title: "HTML5", icon: <FaHtml5 className="w-8 h-8 text-orange-500" /> },
  { title: "CSS3", icon: <FaCss3Alt className="w-8 h-8 text-blue-500" /> },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="w-8 h-8 text-blue-400" />,
  },
  { title: "Shadcn", icon: <SiShadcnui className="w-8 h-8 text-gray-600" /> },
  {
    title: "JavaScript (ES6+)",
    icon: <FaJs className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript className="w-8 h-8 text-blue-600" />,
  },
  { title: "React.js", icon: <FaReact className="w-8 h-8 text-blue-400" /> },
  {
    title: "Next.js",
    icon: <SiNextdotjs className="w-8 h-8 text-gray-800 dark:text-white" />,
  },
  {
    title: "Redux (State Management)",
    icon: <SiRedux className="w-8 h-8 text-purple-500" />,
  },
];

// 🔹 Backend Skills Array
const backendSkills = [
  { title: "Node.js", icon: <FaNodeJs className="w-8 h-8 text-green-600" /> },
  {
    title: "Express.js",
    icon: <SiExpress className="w-8 h-8 text-gray-800 dark:text-gray-300" />,
  },
  { title: "RESTful APIs", icon: <FaCode className="w-8 h-8 text-blue-500" /> },
  {
    title: "Role-Based Authentication (JWT)",
    icon: <FaLock className="w-8 h-8 text-blue-700" />,
  },
  {
    title: "Mongoose & MongoDB",
    icon: <SiMongodb className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Database Design & Optimization",
    icon: <FaDatabase className="w-8 h-8 text-blue-600" />,
  },
];

export default Skills;
