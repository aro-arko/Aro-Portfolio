import AppError from '../../errors/AppError';
import { IBlog } from './blog.interface';
import Blog from './blog.model';
import httpStatus from 'http-status';

const createBlog = async (blog: IBlog) => {
  try {
    const totalBlogs = await Blog.countDocuments();
    blog.blog_no = totalBlogs + 1;

    return await Blog.create(blog);
  } catch (error) {
    console.error('Error creating blog:', error);
    throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'Error creating blog');
  }
};

const getAllBlogs = async () => {
  const blogs = await Blog.find();
  return blogs;
};

const updateBlog = async (id: string, blog: IBlog) => {
  const updatedBlog = await Blog.findByIdAndUpdate(id, blog, { new: true });
  return updatedBlog;
};

export const blogService = {
  createBlog,
  getAllBlogs,
  updateBlog,
};
