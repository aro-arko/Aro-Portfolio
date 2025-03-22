import { IProject } from './project.interface';
import Project from './project.model';

const createProject = async (payLoad: IProject) => {
  const result = await Project.create(payLoad);

  return result;
};

const getProjects = async () => {
  const result = await Project.find();
  return result;
};

const getProjectById = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};

const updateProject = async (id: string, payLoad: Partial<IProject>) => {
  const result = await Project.findByIdAndUpdate(id, payLoad, { new: true });
  return result;
};

const deleteProject = async (id: string) => {
  const result = await Project.findByIdAndDelete(id);
  return result;
};

export const projectService = {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
