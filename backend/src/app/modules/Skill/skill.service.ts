import { ISkill } from './skill.interface';
import Skill from './skill.model';

const createSkill = async (payLoad: ISkill) => {
  const skill = await Skill.create(payLoad);

  return skill;
};

export const skillService = {
  createSkill,
};
