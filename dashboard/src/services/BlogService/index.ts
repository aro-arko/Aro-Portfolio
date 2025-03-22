"use server";

import { cookies } from "next/headers";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.log(error);
  }
};

export const getBlogById = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.log(error);
  }
};

export const updateBlog = async (id: string, blog: any) => {
  const token = (await cookies()).get("accessToken")?.value;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/blogs/update-blog/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(blog),
      }
    );

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.log(error);
  }
};

export const deleteBlog = async (id: string) => {
  const token = (await cookies()).get("accessToken")?.value;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/blogs/delete-blog/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.log(error);
  }
};

export const createBlog = async (blog: any) => {
  const token = (await cookies()).get("accessToken")?.value;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/blogs/create-blog`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(blog),
      }
    );

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.log(error);
  }
};
