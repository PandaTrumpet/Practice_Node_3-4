import { required } from 'joi';
import { Schema, model } from 'mongoose';

const sessionSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  accessToke: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
  accessTokenValidUntil: {
    type: Date,
    required: true,
  },
  redreshTokenValidUntil: {
    type: Date,
    required: true,
  },
});

export const SessionCollection = model('session', sessionSchema);
