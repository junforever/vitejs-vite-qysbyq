import { createSlice } from '@reduxjs/toolkit';
import { SelectedMovieState } from '../../constants';

const initialState: SelectedMovieState = {
  selectedMovie: null,
};

export const selectedMovieSlice = createSlice({
  name: 'selectedMovie',
  initialState,
  reducers: {
    setSelectedMovie: (state, { payload }) => {
      state.selectedMovie = payload;
    },
  },
});

export const { setSelectedMovie } = selectedMovieSlice.actions;
