"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react"; // Import an external link icon
import { IProject } from "@/types/project.type";

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300">
      {/* Banner Image */}
      <div className="p-4 pb-0">
        <div className="relative h-48 w-full rounded-md overflow-hidden">
          <Image
            src={project.banner || "/images/project-default.jpg"}
            alt={`${project.title} Cover`}
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {project.title}
        </h2>

        {/* Buttons */}
        <div className="flex gap-3">
          {/* View Details Button */}
          <Link href={`/projects/${project._id}`} className="flex-1">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 transition">
              View Details
            </Button>
          </Link>

          {/* Live Preview Link */}
          <Link
            href={project.livePreview}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition"
          >
            <ExternalLink className="h-4 w-4" /> {/* External link icon */}
            Live Preview
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
