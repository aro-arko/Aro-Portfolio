"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Cloud, Cpu, Layout, Code, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion"; // Import animation library

const Certifications = () => {
  const certifications = [
    {
      title: "Node.js & MongoDB: Developing Back-end Database Applications",
      issuer: "IBM",
      icon: <Server className="w-6 h-6 text-blue-500" />,
      credentialLink:
        "https://coursera.org/share/af8d72db7d047a51d51601ac8a7bb4b0",
    },
    {
      title: "Learn TypeScript",
      issuer: "Scrimba",
      icon: <Code className="w-6 h-6 text-blue-500" />,
      credentialLink:
        "https://coursera.org/share/f6580b05c5494a90d096be55dc6d22e5",
    },
    {
      title: "Introduction to Cloud Computing",
      issuer: "IBM",
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      credentialLink:
        "https://www.credly.com/badges/6b352e44-dced-42cf-9a06-489032b2ce82/public_url",
    },
    {
      title: "Foundations of UX Design",
      issuer: "Google",
      icon: <Layout className="w-6 h-6 text-blue-500" />,
      credentialLink:
        "https://coursera.org/share/93b4c559e28924517e3fb29b52a2b0dd",
    },
    {
      title: "Operating Systems and You: Becoming a Power User",
      issuer: "Google",
      icon: <Cpu className="w-6 h-6 text-blue-500" />,
      credentialLink:
        "https://coursera.org/share/c8b9266db39f680f67e7af025824f430",
    },
    {
      title: "C for Everyone: Programming Fundamentals",
      issuer: "UC Santa Cruz",
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      credentialLink:
        "https://coursera.org/share/3b09cb15a78375178eeddc08f93190ff",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto w-full">
      <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-full">
                <CardHeader className="flex flex-row items-center space-x-3">
                  <div className="flex-shrink-0">{cert.icon}</div>
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {cert.title}
                    </CardTitle>

                    {/* Inline Badge with Issued By */}
                    <CardDescription className="text-gray-600 flex items-center space-x-2 mt-1">
                      <span>Issued by: {cert.issuer}</span>
                      <Badge
                        variant="outline"
                        className="text-blue-600 border-blue-600 inline-flex items-center px-2 py-1 text-xs"
                      >
                        Verified
                      </Badge>
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="mt-auto flex flex-row items-center space-x-10">
                  <div className=" "></div>
                  <Link
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="default"
                      className=" bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Credentials
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Certifications;
