import { z } from 'zod';

const experienceCreateValidation = z.object({
  body: z.object({
    title: z.string().min(1, 'Title is required'),
    company: z.string().min(1, 'Company is required'),
    type: z.string().min(1, 'Type is required'),
    duration: z.string().min(1, 'Duration is required'),
    location: z.string().min(1, 'Location is required'),
    logo: z.string().min(1, 'Logo is required'),
  }),
});

export const experienceValidation = {
  experienceCreateValidation,
};
