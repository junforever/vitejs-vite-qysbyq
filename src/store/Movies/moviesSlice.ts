import { createSlice } from '@reduxjs/toolkit';
import { GlobalState } from '../../constants';

const initialState: GlobalState = {
  response: null,
  movies: [],
  isLoading: false,
  error: null,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    loadStart: state => {
      state.isLoading = true;
    },
    loadEnd: state => {
      state.isLoading = false;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    setResponse: (state, { payload }) => {
      state.response = payload.response;
      state.movies = payload.movies;
    },
  },
});

export const { loadStart, loadEnd, setError, setResponse } =
  moviesSlice.actions;
