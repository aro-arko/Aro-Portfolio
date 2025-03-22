"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getAllBlogs } from "@/services/BlogService";

interface Blog {
  _id: string;
  title: string;
  date: string;
}

const ShowAllBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await getAllBlogs();
      if (response?.success && response.data) {
        const sorted = response.data.sort(
          (a: Blog, b: Blog) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setBlogs(sorted);
      }
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">All Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-32 w-full rounded-lg" />
            ))
          : blogs.map((blog) => (
              <Card
                key={blog._id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle>{blog.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    {new Date(blog.date).toLocaleDateString()}
                  </p>
                  <Link href={`/blogs/${blog._id}`}>
                    <Button size="sm">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
      </div>
    </div>
  );
};

export default ShowAllBlogs;
