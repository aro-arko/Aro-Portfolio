"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getBlogById } from "@/services/blogServices";
import { IBlog } from "@/types/blog.type";
import Image from "next/image";
import Link from "next/link";

const BlogDetails = () => {
  const params = useParams();
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      if (params?.id) {
        const response = await getBlogById(params.id as string);
        if (response?.success && response.data) {
          setBlog(response.data);
        }
        setLoading(false);
      }
    };
    fetchBlog();
  }, [params]);

  if (loading) {
    return (
      <div className="text-center text-gray-500 py-20 text-lg">
        ⏳ Loading blog...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center text-gray-500 py-20 text-lg">
        ❌ Blog not found.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg mb-10">
        <Image
          src={blog.banner}
          alt={blog.title}
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
          {blog.title}
        </h1>
        <div className="text-sm text-gray-500 flex flex-wrap gap-6 items-center">
          <span>
            ✍️ <strong>{blog.author}</strong>
          </span>
          <span>📅 {blog.date}</span>
          <span>⏱ {blog.readTime}</span>
          <span>
            📂 <span className="capitalize">{blog.category}</span>
          </span>
        </div>
      </div>

      <p className="text-lg text-gray-700 mb-12 leading-relaxed">
        {blog.description}
      </p>

      {/* 🔹 Middle Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {blog.middleTitle}
        </h2>

        <div className="relative w-full h-[350px] rounded-lg overflow-hidden mb-6 shadow-md">
          <Image
            src={blog.middleImage}
            alt={blog.middleTitle}
            fill
            className="object-cover object-center"
          />
        </div>

        <p className="text-gray-700 text-base mb-4 leading-relaxed">
          {blog.middleDescription}
        </p>
        <p className="text-gray-700 text-base leading-relaxed">
          {blog.middleDescription2}
        </p>
      </section>

      <section className="text-lg text-gray-800 mb-16 leading-relaxed">
        {blog.bottomDescription}
      </section>

      <div className="mb-12">
        <h4 className="font-semibold text-gray-700 mb-2">Tags:</h4>
        <div className="flex flex-wrap gap-2">
          {blog.tags?.map((tag, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link href="/blogs">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium">
            ← Back to Blogs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;
