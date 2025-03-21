import { Schema, model } from 'mongoose';

const ExperienceSchema = new Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    type: { type: String, required: true },
    duration: { type: String, required: true },
    location: { type: String, required: true },
    logo: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const Experience = model('Experience', ExperienceSchema);

export default Experience;
