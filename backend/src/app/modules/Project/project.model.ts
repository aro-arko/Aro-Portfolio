import { Schema, model } from 'mongoose';

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    banner: { type: String, required: true },
    description: { type: String, required: true },
    livePreview: { type: String, required: true },
    github: { type: String, required: true },
    challenge: {
      image: { type: String, required: true },
      description: { type: String, required: true },
      challenges: { type: [String], required: true },
    },
    solution: {
      image: { type: String, required: true },
      description: { type: String, required: true },
      solutions: { type: [String], required: true },
    },
    result: {
      image: { type: String, required: true },
      description: { type: String, required: true },
      results: { type: [String], required: true },
    },
  },
  {
    timestamps: true,
  },
);

const Project = model('Project', ProjectSchema);

export default Project;
