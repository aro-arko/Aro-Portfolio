"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getSkills } from "@/services/SkillService";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { ISkill } from "@/types/skill";

const ShowAllSkills = () => {
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      const response = await getSkills();
      if (response?.success && response.data) {
        setSkills(response.data);
      }
      setLoading(false);
    };
    fetchSkills();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Skills</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-32 w-full rounded-lg" />
            ))
          : skills.map((skill) => (
              <Link href={`/skills/${skill._id}`} key={skill._id}>
                <Card className="hover:shadow-md transition p-4 text-center cursor-pointer ">
                  <CardHeader className="flex justify-center">
                    <Image
                      src={skill.icon}
                      alt={skill.title}
                      width={40}
                      height={40}
                      className="object-contain h-10 w-10"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-base font-medium">
                      {skill.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1 capitalize">
                      {skill.category}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default ShowAllSkills;
