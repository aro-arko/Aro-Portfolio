import { z } from 'zod';

const projectCreateValidation = z.object({
  body: z.object({
    title: z.string().min(3).max(255),
    banner: z.string().min(3).max(255),
    description: z.string().min(3).max(255),
    livePreview: z.string().min(3).max(255),
    github: z.string().min(3).max(255),
    challenge: z.object({
      image: z.string().min(3).max(255),
      description: z.string().min(3).max(255),
      challenges: z.array(z.string().min(3).max(255)),
    }),
    solution: z.object({
      image: z.string().min(3).max(255),
      description: z.string().min(3).max(255),
      solutions: z.array(z.string().min(3).max(255)),
    }),
    result: z.object({
      image: z.string().min(3).max(255),
      description: z.string().min(3).max(255),
      results: z.array(z.string().min(3).max(255)),
    }),
  }),
});

export const projectValidation = {
  projectCreateValidation,
};
