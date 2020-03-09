import { models as Models } from '../../config/database';

export const getUserModel = () => {
  return Models.User;
};

export const getSkillModel = () => {
  return Models.Skill;
};
