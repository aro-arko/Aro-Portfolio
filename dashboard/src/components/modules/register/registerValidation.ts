import { z } from "zod";

export const registerValidation = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(50, { message: "Name must be at most 50 characters long" }),

  email: z.string({ required_error: "Email is required" }).email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 8 characters long" }),
  passwordConfirm: z
    .string({
      required_error: "Password confirmation is required",
    })
    .min(1),
});
