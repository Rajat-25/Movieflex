import { Request } from 'express';
import { Types } from 'mongoose';
import z from 'zod';

interface CustomRequest extends Request {
  userId?: Types.ObjectId;
}

type PayloadType = {
  userId: Types.ObjectId;
};

type GenApiType = {
  id: number;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  title: string;
  release_date: string;
  name: string;
  first_air_date: string;
};

type AxiosReqDataType = {
  method: string;
  path: string;
  params: {};
};

const signInBody = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const signUpBody = z.object({
  firstName: z.string().min(2),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export {
  CustomRequest,
  PayloadType,
  signInBody,
  signUpBody,
  AxiosReqDataType,
  GenApiType
};
