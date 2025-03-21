"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { IBlog } from "@/types/blog.type";

const BlogCard = ({ blog }: { blog: IBlog }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300 overflow-hidden">
      <div className="p-4 pb-0">
        <div className="relative h-48 w-full rounded-md overflow-hidden">
          <Image
            src={blog.banner}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="p-5 pt-4">
        {/* 🏷️ Category */}
        <Badge variant="outline" className="mb-2 text-xs capitalize">
          {blog.category}
        </Badge>

        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {blog.title}
        </h3>

        <div className="text-sm text-gray-600 mt-2 flex justify-between flex-wrap">
          <span>✍️ {blog.author}</span>
          <span>⏱ {blog.readTime}</span>
        </div>

        <p className="text-xs text-gray-400 mt-1">{blog.date}</p>

        <p className="text-sm text-gray-700 mt-3 line-clamp-3">
          {blog.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>

        <Link href={`/blogs/${blog.id}`}>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
