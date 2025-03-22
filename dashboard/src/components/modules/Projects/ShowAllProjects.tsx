"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { IProject } from "@/types";
import { getAllProjects } from "@/services/ProjectService";

const ShowAllProjects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await getAllProjects();
      if (response?.success && response.data) {
        const sorted = [...response.data].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setProjects(sorted);
      }
      setLoading(false);
    };
    fetchProjects();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">All Projects</h1>

      <Card className="shadow-lg">
        <CardContent className="p-6 overflow-x-auto">
          <table className="min-w-full text-sm text-left table-auto">
            <thead className="border-b bg-muted text-muted-foreground">
              <tr>
                <th className="py-3 px-4 font-semibold">Title</th>
                <th className="py-3 px-4 font-semibold">Project ID</th>
                <th className="py-3 px-4 font-semibold">Created At</th>
              </tr>
            </thead>
            <tbody>
              {loading
                ? Array.from({ length: 3 }).map((_, i) => (
                    <tr key={i} className="border-b">
                      <td className="py-4 px-4">
                        <Skeleton className="h-4 w-3/4" />
                      </td>
                      <td className="py-4 px-4">
                        <Skeleton className="h-4 w-full" />
                      </td>
                      <td className="py-4 px-4">
                        <Skeleton className="h-4 w-1/2" />
                      </td>
                    </tr>
                  ))
                : projects.map((project) => (
                    <tr
                      key={project._id}
                      className="border-b hover:bg-muted/50 transition"
                    >
                      <td className="py-4 px-4">{project.title}</td>
                      <td className="py-4 px-4 text-blue-600 underline">
                        <Link href={`/projects/${project._id}`}>
                          {project._id}
                        </Link>
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">
                        {new Date(project.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShowAllProjects;
