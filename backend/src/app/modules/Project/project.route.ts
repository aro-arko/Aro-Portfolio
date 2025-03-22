import express from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';
import validateRequest from '../../middlewares/validateRequest';
import { projectValidation } from './project.validation';
import { projectController } from './project.controller';

const router = express.Router();

router.post(
  '/create',
  auth(USER_ROLE.arko),
  validateRequest(projectValidation.projectCreateValidation),
  projectController.createProject,
);

router.get('/', projectController.getProjects);

router.get('/:id', projectController.getProjectById);

router.put(
  '/update/:id',
  auth(USER_ROLE.arko),
  projectController.updateProject,
);

router.delete(
  '/delete/:id',
  auth(USER_ROLE.arko),
  projectController.deleteProject,
);

export const ProjectRoutes = router;
