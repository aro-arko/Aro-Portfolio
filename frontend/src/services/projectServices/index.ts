/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getProjects = async () => {
  try {
    const projects = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/projects`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await projects.json();
    return data;
  } catch (error: any) {
    console.error(error);
  }
};

export const getProjectById = async (id: string) => {
  try {
    const project = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/projects/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await project.json();
    return data;
  } catch (error: any) {
    console.error(error);
  }
};
