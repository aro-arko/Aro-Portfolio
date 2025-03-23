"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import Skills from "./Skills";
import Education from "./Education";
import Certifications from "./Certifications";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Experience from "./Experience";

const About = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-7xl mx-auto pt-16"
    >
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

      <Tabs defaultValue="skills" className="w-full">
        <TabsList className="grid w-full grid-cols-4 gap-1 md:gap-5 h-auto md:h-14 rounded-lg bg-blue-50">
          <TabsTrigger
            className="text-sm md:text-xl "
            value="skills"
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </TabsTrigger>
          <TabsTrigger
            className="text-base md:text-xl"
            value="experience"
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </TabsTrigger>
          <TabsTrigger
            className="text-base md:text-xl"
            value="education"
            onClick={() => setActiveTab("education")}
          >
            Education
          </TabsTrigger>
          <TabsTrigger
            className="text-base md:text-xl"
            value="certification"
            onClick={() => setActiveTab("certification")}
          >
            Certification
          </TabsTrigger>
        </TabsList>

        {/* Tabs Content without animations */}
        <TabsContent value="skills">
          <Card className="p-6 mt-4">
            <Skills />
          </Card>
        </TabsContent>

        <TabsContent value="experience">
          <Card className="p-6 mt-4">
            <Experience />
          </Card>
        </TabsContent>
        <TabsContent value="education">
          <Card className="p-6 mt-4">
            <Education />
          </Card>
        </TabsContent>

        <TabsContent value="certification">
          <Card className="p-6 mt-4">
            <Certifications />
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default About;
