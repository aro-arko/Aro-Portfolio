import Blogs from "@/components/modules/Blogs/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Hi there! I am Arko. Read my blogs on web development, programming, and technology.",
};

const BlogsPage = () => {
  return (
    <div>
      <Blogs />
    </div>
  );
};

export default BlogsPage;
