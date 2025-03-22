import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { experienceValidation } from './experience.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';
import { experienceController } from './experience.controller';

const router = express.Router();

router.get('/', experienceController.getAllExperiences);
router.post(
  '/create',
  auth(USER_ROLE.arko),
  validateRequest(experienceValidation.experienceCreateValidation),
  experienceController.createExperience,
);

router.put(
  '/update/:id',
  auth(USER_ROLE.arko),
  experienceController.updateExperience,
);

router.delete(
  '/delete/:id',
  auth(USER_ROLE.arko),
  experienceController.deleteExperience,
);

router.get('/:id', experienceController.getExperienceById);
export const ExperienceRoutes = router;
