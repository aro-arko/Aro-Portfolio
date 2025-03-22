import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { experienceService } from './experience.service';
import httpStatus from 'http-status';

const createExperience = catchAsync(async (req, res) => {
  const result = await experienceService.createExperience(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Experience created successfully',
    data: result,
  });
});

const getAllExperiences = catchAsync(async (req, res) => {
  const result = await experienceService.getAllExperiences();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All experiences fetched successfully',
    data: result,
  });
});

const updateExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await experienceService.updateExperience(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience updated successfully',
    data: result,
  });
});

const deleteExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  await experienceService.deleteExperience(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience deleted successfully',
    data: null,
  });
});

const getExperienceById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await experienceService.getExperienceById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience fetched successfully',
    data: result,
  });
});

export const experienceController = {
  createExperience,
  getAllExperiences,
  updateExperience,
  deleteExperience,
  getExperienceById,
};
