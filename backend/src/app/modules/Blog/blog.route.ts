import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { blogValidation } from './blog.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';
import { blogController } from './blog.controller';

const router = express.Router();

router.get('/', blogController.getAllBlogs);

router.post(
  '/create-blog',
  auth(USER_ROLE.arko),
  validateRequest(blogValidation.createBlogValidation),
  blogController.createBlog,
);

router.patch(
  '/update-blog/:id',
  auth(USER_ROLE.arko),
  validateRequest(blogValidation.updateBlogValidation),
  blogController.updateBlog,
);

export const BlogRoutes = router;
