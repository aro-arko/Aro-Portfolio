import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { skillService } from './skill.service';

const createSkill = catchAsync(async (req, res) => {
  const result = await skillService.createSkill(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Skill created successfully',
    data: result,
  });
});

export const skillController = {
  createSkill,
};
