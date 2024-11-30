import { createApi } from '@reduxjs/toolkit/query/react';
import { CachedQuery } from '../../services/api.cache.service';
import { CategoriesType } from '../../constants';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: CachedQuery(),
  endpoints: builder => ({
    getMovies: builder.query({
      query: ({
        category,
        ...params
      }: {
        category: CategoriesType | '';
        [key: string]: any;
      }) => ({
        url: `/movie/${category}`,
        method: 'GET',
        params,
      }),
    }),
  }),
});

export const { useGetMoviesQuery, useLazyGetMoviesQuery } = moviesApi;
