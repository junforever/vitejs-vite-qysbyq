/**
 * @jest-environment jsdom
 */

import { MovieCard } from '../../../components/MovieCard/MovieCard';
import { render, screen } from '@testing-library/react';
import { LANGUAGES } from '../../../constants';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { filtersSlice, moviesSlice, selectedMovieSlice } from '../../../store';

describe('testing Movie Card', () => {
  const movie = {
    adult: false,
    backdrop_path: '/tElnmtQ6yz1PjN1kePNl8yMSb59.jpg',
    genre_ids: [16, 12, 10751, 35],
    id: 1241982,
    original_language: LANGUAGES.English,
    original_title: 'Moana 2',
    overview:
      'Tras recibir una inesperada llamada de sus antepasados, Vaiana debe viajar a los lejanos mares de Oceanía y adentrarse en peligrosas aguas perdidas para vivir una aventura sin precedentes.',
    popularity: 2595.191,
    poster_path: '/f4voSsbPTvaQwicwd1dyxICow6c.jpg',
    release_date: '2024-11-27',
    title: 'Vaiana 2',
    video: false,
    vote_average: 7.1,
    vote_count: 81,
  };

  const store = configureStore({
    reducer: {
      movies: moviesSlice.reducer,
      selectedMovie: selectedMovieSlice.reducer,
      filters: filtersSlice.reducer,
    },
  });

  test('should load the card container element', () => {
    render(
      <Provider store={store}>
        <MovieCard movie={movie} cssClass="" onCardSelect={() => {}} />
      </Provider>,
    );
    const container = screen.getByTestId('image-card-container');
    expect(container).toBeInTheDocument();
  });

  test('should load the place holder image', () => {
    render(
      <Provider store={store}>
        <MovieCard movie={movie} cssClass="" onCardSelect={() => {}} />
      </Provider>,
    );
    const image = screen.getByRole('img', { name: 'Placeholder' });
    expect(image).toBeDefined();
  });

  test('should load the movie image an the title', () => {
    render(
      <Provider store={store}>
        <MovieCard movie={movie} cssClass="" onCardSelect={() => {}} />
      </Provider>,
    );
    const image = screen.getByRole('img', { name: movie.title });
    expect(image).toBeDefined();

    const title = screen.getByRole('heading', { level: 2 });
    expect(title.innerHTML).toBe(movie.title);
  });
});
