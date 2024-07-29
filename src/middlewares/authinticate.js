import createHttpError from 'http-errors';
import { SessionCollection } from '../db/models/session.js';
import { UserCollection } from '../db/models/user.js';

export const authinticate = async (req, res, next) => {
  try {
    const { authorization = '' } = req.headers;
    // if (!authorization) {
    //   throw createHttpError(401, 'Unauthorized');
    // }
    const [bearer, token] = authorization.split(' ');
    if (bearer !== 'Bearer' || !token) {
      throw createHttpError(401, 'Should include bearer or token');
    }
    const session = await SessionCollection.findOne({ accessToke: token });
    if (!session) {
      throw createHttpError(401, 'Session not found');
    }
    if (new Date() > new Date(session.accessTokenValidUntil)) {
      throw createHttpError(401, 'Access token was expired');
    }
    const user = await UserCollection.findById(session.userId);
    if (!user) {
      throw createHttpError(401, 'User not found');
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
