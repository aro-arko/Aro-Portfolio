import { model, Schema } from 'mongoose';
import { IBlog } from './blog.interface';

const BlogSchema = new Schema<IBlog>({
  blog_no: { type: Number, required: true },
  title: { type: String, required: true },
  banner: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  middleImage: { type: String, required: true },
  middleTitle: { type: String, required: true },
  middleDescription: { type: String, required: true },
  middleDescription2: { type: String, required: true },
  bottomDescription: { type: String, required: true },
  readTime: { type: String, required: true },
  tags: { type: [String], required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
});

const Blog = model<IBlog>('Blog', BlogSchema);

export default Blog;
