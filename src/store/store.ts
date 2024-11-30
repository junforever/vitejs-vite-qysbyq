import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { moviesSlice } from './Movies';
import { selectedMovieSlice } from './Movies/selectedMovieSlice';
import { filtersSlice } from './Movies/filtersSlice';
import { moviesApi } from './Movies/moviesApiSlice';

export const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    selectedMovie: selectedMovieSlice.reducer,
    filters: filtersSlice.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
