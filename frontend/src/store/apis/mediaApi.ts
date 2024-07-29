import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const mediaApi = createApi({
  reducerPath: 'media_api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_MEDIA_URL,
    credentials: 'include',
  }),

  tagTypes: ['user_bookmark', 'main_bookmark'],

  endpoints(builder) {
    return {
      readBookmark: builder.query<BookmarkResType, UndefinedType>({
        providesTags: (res) => {
          const tags: BookmarkTagType[] = [];
          tags.push({
            type: 'main_bookmark',
            id: 11,
          });

          res?.data?.forEach((ele) => {
            tags.push({
              type: 'user_bookmark',
              id: ele.id,
            });
          });

          return tags;
        },
        query: () => {
          return {
            method: 'GET',
            url: '/bookmark/read',
          };
        },
      }),

      addbookmark: builder.mutation<BookmarkResType, BookmarkReqType>({
        invalidatesTags: (_) => {
          const tag: BookmarkTagType[] = [
            {
              type: 'main_bookmark',
              id: 11,
            },
          ];
          return tag;
        },
        query: (body) => {
          return {
            method: 'POST',
            url: '/bookmark/add',
            body,
          };
        },
      }),

      removebookmark: builder.mutation<BookmarkResType, BookmarkReqType>({
        invalidatesTags: (_1, _2, req) => {
          const tag: BookmarkTagType[] = [
            {
              type: 'user_bookmark',
              id: req.id,
            },
          ];
          return tag;
        },
        query: (body) => {
          return {
            method: 'Delete',
            url: '/bookmark/del',
            body,
          };
        },
      }),

      trendingAll: builder.query<MediaResType, UndefinedType>({
        query: () => {
          return {
            method: 'GET',
            url: '/trending',
          };
        },
      }),

      popularMovie: builder.query<MediaResType, UndefinedType>({
        query: () => {
          return {
            method: 'GET',
            url: '/movie',
          };
        },
      }),

      popularTv: builder.query<MediaResType, UndefinedType>({
        query: () => {
          return {
            method: 'GET',
            url: '/tv',
          };
        },
      }),
    };
  },
});

export const {
  usePopularMovieQuery,
  usePopularTvQuery,
  useTrendingAllQuery,
  useRemovebookmarkMutation,
  useAddbookmarkMutation,
  useReadBookmarkQuery,
} = mediaApi;


export default mediaApi;
