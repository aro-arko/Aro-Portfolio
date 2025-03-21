/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getSkills = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skills`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.log(error);
  }
};
