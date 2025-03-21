import AppError from '../../errors/AppError';
import { IBlog } from './blog.interface';
import Blog from './blog.model';
import httpStatus from 'http-status';

const createBlog = async (blog: IBlog) => {
  try {
    const lastBlog = await Blog.findOne().sort({ blog_no: -1 });

    blog.blog_no = lastBlog ? lastBlog.blog_no + 1 : 1;

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

const getBlogById = async (id: string) => {
  const blog = await Blog.findById(id);
  return blog;
};

const updateBlog = async (id: string, blog: IBlog) => {
  const updatedBlog = await Blog.findByIdAndUpdate(id, blog, { new: true });
  return updatedBlog;
};

const deleteBlog = async (id: string) => {
  await Blog.findByIdAndDelete(id);
  return;
};

export const blogService = {
  createBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog,
  getBlogById,
};
