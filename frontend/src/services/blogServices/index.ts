/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error(error);
  }
};
