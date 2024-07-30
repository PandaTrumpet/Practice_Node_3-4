import createHttpError from 'http-errors';
import { UserCollection } from '../db/models/user.js';
import bcrypt from 'bcrypt';
import { SessionCollection } from '../db/models/session.js';
import randomBytes from 'randombytes';
export const registerUser = async (req, res, next) => {
  try {
    const user = await UserCollection.findOne({ email: req.body.email });
    if (user) {
      throw createHttpError(409, 'Email in use');
    }
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await UserCollection.create({
      ...req.body,
      password: encryptedPassword,
    });
    res.status(201).json({
      status: 201,
      message: 'User created',
      data: {
        _id: newUser._id,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserCollection.findOne({ email });
    if (!user) {
      throw createHttpError(400, 'Email or password is wrong!');
    }
    const isPasswordCompared = await bcrypt.compare(password, user.password);
    if (!isPasswordCompared) {
      throw createHttpError(400, 'Email or password is wrong!');
    }
    await SessionCollection.deleteOne({ userId: user._id });
    const session = await SessionCollection.create({
      userId: user._id,
      accessToke: randomBytes(32).toString('base64'),
      refreshToken: randomBytes(32).toString('base64'),
      accessTokenValidUntil: new Date(Date.now() + 1 * 60 * 60 * 1000),
      redreshTokenValidUntil: new Date(Date.now() + 1 * 60 * 60 * 1000 * 7),
    });
    res.status(200).json({
      status: 200,
      message: 'Successfuly login',
      data: {
        refreshToken: session.refreshToken,
        accessToke: session.accessToke,
        user: {
          email: user.email,
          role: user.role,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

export const sendEmailController = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await UserCollection.findOne({ email });
    if (!user) {
      throw createHttpError(404, 'Email not found');
    }
  } catch (error) {
    next(erro);
  }
};
