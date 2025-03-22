import { IExperience } from './experience.interface';
import Experience from './experience.model';

const createExperience = async (payLoad: IExperience) => {
  const experience = await Experience.create(payLoad);

  return experience;
};

const getAllExperiences = async () => {
  const experiences = await Experience.find().sort({ createdAt: -1 });

  return experiences;
};

const updateExperience = async (id: string, payLoad: Partial<IExperience>) => {
  const experience = await Experience.findByIdAndUpdate(id, payLoad, {
    new: true,
  });
  return experience;
};

const deleteExperience = async (id: string) => {
  await Experience.findByIdAndDelete(id);

  return null;
};

const getExperienceById = async (id: string) => {
  const experience = await Experience.findById(id);

  return experience;
};

export const experienceService = {
  createExperience,
  getAllExperiences,
  updateExperience,
  deleteExperience,
  getExperienceById,
};
