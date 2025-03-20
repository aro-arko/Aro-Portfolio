"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import projectData from "@/fakeData/Projects.json";
import { Button } from "@/components/ui/button";

const ProjectDetails = () => {
  const params = useParams();
  const project = projectData.find(
    (p) => p.id === parseInt(params.id as string)
  );

  if (!project) {
    return (
      <div className="text-center text-lg mt-10 text-gray-600">
        ❌ Project not found.
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="max-w-7xl mx-auto px-6 py-12"
    >
      {/* 🔹 Banner Section */}
      <div className="rounded-lg overflow-hidden relative">
        <Image
          src={project.banner}
          alt="Project Banner"
          width={1200}
          height={350}
          className="w-full max-h-[450px] object-cover rounded-lg"
        />
      </div>

      {/* 🔹 Title & Description Section */}
      <div className="mt-6 text-center">
        <h2 className="text-4xl font-bold">{project.title}</h2>
        <p className="text-lg mt-2 max-w-3xl mx-auto text-gray-600">
          {project.description}
        </p>

        <div className="flex justify-center mt-6 space-x-4">
          <Link href={project.livePreview} target="_blank" className="">
            <Button>🔗 Live Preview</Button>
          </Link>
          <Link href={project.github} target="_blank" className="">
            <Button className="bg-gray-600 text-white">💻 GitHub Code</Button>
          </Link>
        </div>
      </div>

      {/* 🔹 Project Details Sections */}
      <div className="mt-12 space-y-12">
        {/* 🔥 Challenge Section */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src={project.challenge.image}
            alt="Challenge Image"
            width={600}
            height={280} // 📏 Adjusted Height
            className="w-full md:w-1/2 max-h-[280px] object-cover rounded-lg shadow-md"
          />
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold mb-3">The Challenge</h3>
            <p className="text-lg text-gray-600">
              {project.challenge.description}
            </p>
            <ul className="list-disc list-inside mt-3 text-gray-700 space-y-2">
              {project.challenge.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* 🔥 Solution Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <Image
            src={project.solution.image}
            alt="Solution Image"
            width={600}
            height={280} // 📏 Adjusted Height
            className="w-full md:w-1/2 max-h-[280px] object-cover rounded-lg shadow-md"
          />
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold mb-3">The Solution</h3>
            <p className="text-lg text-gray-600">
              {project.solution.description}
            </p>
            <ul className="list-disc list-inside mt-3 text-gray-700 space-y-2">
              {project.solution.solutions.map((solution, index) => (
                <li key={index}>{solution}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* 🔥 Project Result Section */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src={project.result.image}
            alt="Result Image"
            width={600}
            height={280} // 📏 Adjusted Height
            className="w-full md:w-1/2 max-h-[280px] object-cover rounded-lg shadow-md"
          />
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold mb-3">Project Result</h3>
            <p className="text-lg text-gray-600">
              {project.result.description}
            </p>
            <ul className="list-disc list-inside mt-3 text-gray-700 space-y-2">
              {project.result.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 🔙 Back Button */}
      <div className="mt-12 text-center">
        <Link href="/projects">
          <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all">
            ← Back to Projects
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
