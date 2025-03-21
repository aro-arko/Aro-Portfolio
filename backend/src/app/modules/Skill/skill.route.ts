import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { skillValidation } from './skill.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';
import { skillController } from './skill.controller';

const router = express.Router();

router.post(
  '/create',
  auth(USER_ROLE.arko),
  validateRequest(skillValidation.createSkillValidation),
  skillController.createSkill,
);

router.get('/', skillController.getAllSkills);

router.put('/update/:id', auth(USER_ROLE.arko), skillController.updateSkill);

router.delete('/delete/:id', auth(USER_ROLE.arko), skillController.deleteSkill);

export const SkillRoutes = router;
