/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getExperieces = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/experiences`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error(error);
  }
};
