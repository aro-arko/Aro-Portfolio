import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { skillValidation } from './skill.validation';

const router = express.Router();

router.post('/create', validateRequest(skillValidation.createSkillValidation));

export const SkillRoutes = router;
