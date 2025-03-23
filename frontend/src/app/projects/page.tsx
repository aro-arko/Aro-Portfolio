import Projects from "@/components/modules/Projects/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Hi there! I am Arko. Check out my projects and contributions to open-source.",
};

const ProjectsPage = () => {
  return (
    <div>
      <Projects />
    </div>
  );
};

export default ProjectsPage;
