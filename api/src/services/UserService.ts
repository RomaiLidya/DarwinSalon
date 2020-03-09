import Logger from '../Logger';
import * as UserDao from '../database/dao/UserDao';
import DuplicatedUserError from '../errors/DuplicateUserError';
import UserNotFoundError from '../errors/UserNotFoundError';
import { hashPassword, generateRandomPassword } from './PasswordService';
import * as EmailService from './EmailService';
import { UserResponseModel } from '../typings/ResponseFormats';

const LOG = new Logger('UserService.ts');

export const getUserById = async (userId: number) => {
  return await UserDao.getById(userId);
};

export const getUserFullDetailsById = async (id: number): Promise<UserResponseModel> => {
  LOG.debug('Getting user full details from id');

  const user = await UserDao.getById(id);

  if (!user) {
    throw new UserNotFoundError(id);
  }

  return user.toResponseFormat();
};

/**
 * Check if a user exists
 *
 * @param loginName of the required user
 *
 * @returns boolean
 */
export const isUserExistsByLoginName = async (loginName: string): Promise<boolean> => {
  return (await UserDao.countByLoginName(loginName)) > 0;
};

/**
 *
 * @param displayName to be updated
 * @param email to be updated
 *
 * @returns void
 */
export const editUser = async (userId: number, displayName?: string, email?: string, newPassword?: string) => {
  LOG.debug('Editing User');

  const user = await UserDao.getById(userId);

  if (!user) {
    throw new UserNotFoundError(userId);
  }

  if (user.loginName !== email && (await isUserExistsByLoginName(email))) {
    throw new DuplicatedUserError();
  }

  let newHashPassword = undefined;
  if (newPassword) {
    newHashPassword = await hashPassword(newPassword);
  }

  try {
    await user.update({ loginName: email, displayName, email, password: newHashPassword });
    return await getUserFullDetailsById(userId);
  } catch (err) {
    throw err;
  }
};

/**
 * Check if a user with the same loginName exists
 * Create a new user in the system, based on current user tenancy
 *
 * @param displayName of the new user
 * @param email of the new user
 * @param password of the new user
 *
 * @returns UserDetailsModel
 */
export const createUser = async (displayName: string, email: string) => {
  LOG.debug('Creating User');

  if (await isUserExistsByLoginName(email)) {
    throw new DuplicatedUserError();
  }

  try {
    const autoGeneratedPassword = generateRandomPassword();
    const user = await UserDao.createUser(email, displayName, autoGeneratedPassword);
    await EmailService.sendNewUserWelcomeEmail(user.email, user.displayName, autoGeneratedPassword, user.email);

    return user;
  } catch (err) {
    throw err;
  }
};

/**
 * Search user with query and optional pagination
 *
 * @param s offset for pagination search
 * @param l limit for pagination search
 * @param q query for searching
 *
 * @returns the total counts and the data for current page
 */
export const searchUsersWithPagination = async (offset: number, limit?: number, q?: string) => {
  LOG.debug('Searching Users with Pagination');

  const { rows, count } = await UserDao.getPaginated(offset, limit, q);

  return { rows, count };
};

/**
 * To activate (undelete) a user. Need to check for the licenses of Tenant
 *
 * @param userId of the user to be activated.
 *
 * @returns void
 */
export const activateUser = async (userId: number) => {
  const user = await UserDao.getById(userId);

  await user.update({ active: true });
};

/**
 * To deactivate (soft delete) a user
 *
 * @param userId of the user to be deactivated
 *
 * @returns void
 */
export const deactivateUser = async (userId: number) => {
  const user = await UserDao.getById(userId);

  if (!user) {
    throw new UserNotFoundError(userId);
  }

  await user.update({ active: false });
};
