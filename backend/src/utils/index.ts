import axios from 'axios';
import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
import { AxiosReqDataType, GenApiType } from './types';

enum code {
  'success' = 201,
  'cred' = 401,
  'notFound' = 404,
  'server' = 500,
  'reqOkMsg' = 'Success',
  'redFailedMsg' = 'Failed',
  'servMsg' = 'Internal sever error',
  'credMsg' = 'Invalid credentials',
  'authMsg' = 'Authorization failed',
  'notFoundMsg' = 'Not found',
}

const getToken = (id: Types.ObjectId) => {
  const token = jwt.sign(
    {
      userId: id,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: '1h',
    }
  );
  return token;
};

const getFilteredData = (data: GenApiType[]) => {
  const res = data.map(
    ({
      id,
      title,
      name,
      overview,
      first_air_date,
      backdrop_path,
      poster_path,
      release_date,
    }) => {
      return {
        id,
        title: name || title,
        overview,
        poster_path,
        backdrop_path,
        release_date: release_date || first_air_date,
      };
    }
  );
  return res;
};

const mediaHeader = () => {
  return {
    accept: 'application/json',
    Authorization: process.env.MEDIA_ACCESS_TOKEN,
  };
};

const getReqData = async ({ method, path, params }: AxiosReqDataType) => {
  const url = process.env.MEDIA_URL! + path;

  const { data } = await axios({
    method,
    url,
    params,
    headers: mediaHeader(),
  });
  return data;
};

export { code, getReqData, getToken, mediaHeader ,getFilteredData};
