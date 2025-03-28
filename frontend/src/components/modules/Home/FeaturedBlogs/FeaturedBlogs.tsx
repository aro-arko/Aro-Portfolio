"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import BlogCard from "../../Blogs/BlogCard";
import Link from "next/link";
import { IBlog } from "@/types/blog.type";
import { getAllBlogs } from "@/services/blogServices";

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await getAllBlogs();
      if (response?.success && response.data) {
        setBlogs(response.data);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const latestThree = [...blogs]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto pt-16">
      <h2 className="text-4xl font-bold text-center mb-8">Featured Blogs</h2>

      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {latestThree.map((blog, index) => (
              <motion.div
                key={blog._id}
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <BlogCard blog={blog} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 🔗 View All Blogs Button */}
        <div className="flex justify-center mt-10">
          <Link href="/blogs">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              View All Blogs
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedBlogs;
