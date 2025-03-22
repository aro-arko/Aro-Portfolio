import { ISkill } from './skill.interface';
import Skill from './skill.model';

const createSkill = async (payLoad: ISkill) => {
  const skill = await Skill.create(payLoad);

  return skill;
};

const getAllSkills = async () => {
  const skills = await Skill.find();

  return skills;
};

const updateSkill = async (id: string, payLoad: Partial<ISkill>) => {
  const skill = await Skill.findByIdAndUpdate(id, payLoad, { new: true });

  return skill;
};

const deleteSkill = async (id: string) => {
  await Skill.findByIdAndDelete(id);

  return null;
};

const getSkillById = async (id: string) => {
  const skill = await Skill.findById(id);
  return skill;
};

export const skillService = {
  createSkill,
  getAllSkills,
  updateSkill,
  deleteSkill,
  getSkillById,
};
