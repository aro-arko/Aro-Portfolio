"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getExperiences } from "@/services/ExperienceService";
import { IExperience } from "@/types/experience";

const ShowAllExperiences = () => {
  const [experiences, setExperiences] = useState<IExperience[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchExperiences = async () => {
      const response = await getExperiences();
      if (response?.success && response.data) {
        setExperiences(response.data);
      }
      setLoading(false);
    };

    fetchExperiences();
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Work Experience</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {loading
          ? Array.from({ length: 2 }).map((_, i) => (
              <Skeleton key={i} className="h-36 w-full rounded-lg" />
            ))
          : experiences.map((exp) => (
              <Card key={exp._id} className="hover:shadow-md transition">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <CardTitle className="text-lg">{exp.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {exp.company} • {exp.type}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-1">{exp.duration}</p>
                  <p className="text-sm text-muted-foreground">
                    {exp.location}
                  </p>
                  <Button
                    onClick={() => router.push(`/experiences/${exp._id}`)}
                    className="mt-4 cursor-pointer px-6 "
                  >
                    Edit
                  </Button>
                </CardContent>
              </Card>
            ))}
      </div>
    </div>
  );
};

export default ShowAllExperiences;
