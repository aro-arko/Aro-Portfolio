"use client";

import * as React from "react";
import {
  User,
  Folder,
  PlusCircle,
  FileText,
  Briefcase,
  Star,
  Settings,
  Lock,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Profile",
      url: "/profile",
      icon: User,
    },
    {
      title: "Projects",
      url: "",
      icon: Folder,
      items: [
        {
          title: "Projects",
          url: "/projects",
        },
        {
          title: "Create Project",
          url: "/create-project",
          icon: PlusCircle,
        },
      ],
    },
    {
      title: "Blogs",
      url: "#",
      icon: FileText,
      items: [
        {
          title: "Blogs",
          url: "/blogs",
        },
        {
          title: "Create Blog",
          url: "/create-blog",
          icon: PlusCircle,
        },
      ],
    },
    {
      title: "Experience",
      url: "#",
      icon: Briefcase,
      items: [
        {
          title: "Experiences",
          url: "/experiences",
        },
        {
          title: "Create Experience",
          url: "/create-experience",
          icon: PlusCircle,
        },
      ],
    },
    {
      title: "Skills",
      url: "#",
      icon: Star,
      items: [
        {
          title: "Skills",
          url: "/skills",
        },
        {
          title: "Create Skill",
          url: "/create-skill",
          icon: PlusCircle,
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Change Password",
          url: "/change-password",
          icon: Lock,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
