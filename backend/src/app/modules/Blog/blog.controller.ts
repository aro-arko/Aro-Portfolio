import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { blogService } from './blog.service';
import httpStatus from 'http-status';

const createBlog = catchAsync(async (req, res) => {
  const result = await blogService.createBlog(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Blog created successfully',
    data: result,
  });
});

export const blogController = {
  createBlog,
};
