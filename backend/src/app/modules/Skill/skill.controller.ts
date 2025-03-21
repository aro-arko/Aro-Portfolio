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

const getAllSkills = catchAsync(async (req, res) => {
  const result = await skillService.getAllSkills();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skills fetched successfully',
    data: result,
  });
});

const updateSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await skillService.updateSkill(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill updated successfully',
    data: result,
  });
});

const deleteSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  await skillService.deleteSkill(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill deleted successfully',
    data: null,
  });
});

export const skillController = {
  createSkill,
  getAllSkills,
  updateSkill,
  deleteSkill,
};
