import ApiService from '../../services/api.service';
import { AppDispatch, RootState } from '../store';
import { loadEnd, loadStart, setError, setResponse } from './moviesSlice';

export const getMovies = (setPage = 1) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(loadStart());
      const category = getState().filters.category;
      const language = getState().filters.language;

      const api = new ApiService(dispatch);
      const { page, total_pages, total_results, results, dates } =
        await api.getMovies({
          language: language?.value || '',
          page: setPage,
          category: category?.value || '',
        });

      const response = {
        page,
        total_pages,
        total_results,
        dates,
      };

      const currentMovies = getState().movies.movies;
      dispatch(
        setResponse({
          response,
          movies: page === 1 ? results : [...currentMovies, ...results],
        }),
      );
    } catch (error) {
      dispatch(
        setError(
          `Error loading the movies: ${error instanceof Error ? error.message : error}`,
        ),
      );
    } finally {
      dispatch(loadEnd());
    }
  };
};

export const processQueryResult = (apiResp: any) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    if (apiResp) {
      const response = {
        page: apiResp.page,
        total_pages: apiResp.total_pages,
        total_results: apiResp.total_results,
        dates: apiResp.dates,
      };
      const currentMovies = getState().movies.movies;
      const results = apiResp.results;
      dispatch(
        setResponse({
          response,
          movies:
            response.page === 1 ? results : [...currentMovies, ...results],
        }),
      );
    }
  };
};
