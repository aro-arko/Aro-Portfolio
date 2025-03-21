import { z } from 'zod';

const createSkillValidation = z.object({
  body: z.object({
    title: z.string().min(1, 'Title is required'),
    icon: z.string().min(1, 'Icon is required'),
    category: z.string().min(1, 'Category is required'),
  }),
});

export const skillValidation = {
  createSkillValidation,
};
