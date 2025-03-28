import { z } from 'zod';

const createBlogValidation = z.object({
  body: z.object({
    title: z.string().min(1, 'Title is required'),
    banner: z.string().url('Banner must be a valid URL'),
    date: z
      .string()
      .refine(
        (val) => !isNaN(Date.parse(val)),
        'Date must be a valid date string',
      ),
    description: z
      .string()
      .min(10, 'Description must be at least 10 characters'),
    middleImage: z.string().url('Middle image must be a valid URL').optional(),
    middleTitle: z.string().min(1, 'Middle title is required').optional(),
    middleDescription: z
      .string()
      .min(10, 'Middle description must be at least 10 characters')
      .optional(),
    middleDescription2: z
      .string()
      .min(10, 'Middle description 2 must be at least 10 characters')
      .optional(),
    bottomDescription: z
      .string()
      .min(10, 'Bottom description must be at least 10 characters')
      .optional(),
    readTime: z
      .string()
      .regex(
        /^\d+\smin\sread$/,
        "Read time must be in format like '6 min read'",
      ),
    tags: z.array(z.string().min(1)).min(1, 'At least one tag is required'),
    author: z.string().min(1, 'Author is required'),
    category: z.string().min(1, 'Category is required'),
  }),
});

const updateBlogValidation = z.object({
  body: z.object({
    title: z.string().min(1, 'Title is required').optional(),
    banner: z.string().url('Banner must be a valid URL').optional(),
    date: z
      .string()
      .refine(
        (val) => !isNaN(Date.parse(val)),
        'Date must be a valid date string',
      )
      .optional(),
    description: z
      .string()
      .min(10, 'Description must be at least 10 characters')
      .optional(),
    middleImage: z.string().url('Middle image must be a valid URL').optional(),
    middleTitle: z.string().min(1, 'Middle title is required').optional(),
    middleDescription: z
      .string()
      .min(10, 'Middle description must be at least 10 characters')
      .optional(),
    middleDescription2: z
      .string()
      .min(10, 'Middle description 2 must be at least 10 characters')
      .optional(),
    bottomDescription: z
      .string()
      .min(10, 'Bottom description must be at least 10 characters')
      .optional(),
    readTime: z
      .string()
      .regex(
        /^\d+\smin\sread$/,
        "Read time must be in format like '6 min read'",
      )
      .optional(),
    tags: z
      .array(z.string().min(1))
      .min(1, 'At least one tag is required')
      .optional(),
    author: z.string().min(1, 'Author is required').optional(),
    category: z.string().min(1, 'Category is required').optional(),
  }),
});

export const blogValidation = {
  createBlogValidation,
  updateBlogValidation,
};
