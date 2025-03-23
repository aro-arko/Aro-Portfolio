import BlogDetails from "@/components/modules/Blogs/BlogDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details",
  description:
    "Hi there! I am Arko. Read my blogs on web development, programming, and technology.",
};

const BlogDetailsPage = () => {
  return (
    <div>
      <BlogDetails />
    </div>
  );
};

export default BlogDetailsPage;
