import ProjectDetails from "@/components/modules/Projects/ProjectDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Details",
  description:
    "Hi there! I am Arko. Check out my projects and contributions to open-source.",
};

const ProjectDetailsPage = () => {
  return (
    <div>
      <ProjectDetails />
    </div>
  );
};

export default ProjectDetailsPage;
