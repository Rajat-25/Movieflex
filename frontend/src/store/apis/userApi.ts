import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { urlPath } from '../../utils';

const userApi = createApi({
  reducerPath: 'user_api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_USER_URL,
    credentials:'include'
  }),
  endpoints(builder) {
    return {
      SignIn: builder.mutation<GeneralAuthType, SignInReqType>({
        query: (body) => {
          return {
            method: 'POST',
            url: urlPath.signin,
            body,
          };
        },
      }),

      SignUp: builder.mutation<GeneralAuthType,SignUpReqType>({
        query: (body) => {
          return {
            method: 'POST',
            url:urlPath.signup,
            body,
          };
        },
      }),
    };
  },
});

export const { useSignInMutation,useSignUpMutation } = userApi;
export default userApi;
