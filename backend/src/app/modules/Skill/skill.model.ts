import { Schema, model } from 'mongoose';
import { ISkill } from './skill.interface'; // adjust the path as needed

const SkillSchema = new Schema<ISkill>(
  {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    category: {
      type: String,
      enum: ['frontend', 'backend'],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Skill = model<ISkill>('Skill', SkillSchema);

export default Skill;
