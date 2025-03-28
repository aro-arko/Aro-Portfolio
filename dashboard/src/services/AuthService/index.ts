"use server";

import { jwtDecode } from "jwt-decode";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    return res.json();
  } catch (error: any) {
    return error;
  }
};
export const loginUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await res.json();
    if (result.success) {
      (await cookies()).set("accessToken", result.data.accessToken);
    }
    return result;
  } catch (error: any) {
    return error;
  }
};

export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  let decodedData = null;

  if (accessToken) {
    decodedData = await jwtDecode(accessToken);
    return decodedData;
  } else {
    return null;
  }
};

export const logout = async () => {
  (await cookies()).delete("accessToken");
};

export const changePassword = async (passwords: FieldValues) => {
  const token = (await cookies()).get("accessToken")?.value;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/auth/change-password`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(passwords),
      }
    );
    return res.json();
  } catch (error: any) {
    return error;
  }
};
