import axios, { AxiosInstance, AxiosError } from 'axios';
import { AppDispatch, setError } from '../store';
import { CATEGORIES, DATA_URL, LANGUAGES } from '../constants';

class ApiService {
  private apiClient: AxiosInstance;
  private readonly apiKey: string;
  private readonly dispatch: AppDispatch;

  constructor(dispatch: AppDispatch) {
    this.apiKey = import.meta.env.VITE_API_KEY || '';
    this.dispatch = dispatch;

    if (!this.apiKey) {
      throw new Error('Connection, check your credentials');
    }

    this.apiClient = axios.create({
      baseURL: DATA_URL,
    });

    this.apiClient.interceptors.response.use(
      response => response,
      error => this.handleError(error),
    );
  }

  private handleError(error: AxiosError): Promise<never> {
    const errorPrefix = 'Error in database operation';
    const errorMessage = error.response
      ? `${errorPrefix} ${error.response.status}: ${error.response.data}`
      : `${errorPrefix} ${error.message}`;

    this.dispatch(setError(errorMessage));

    return Promise.reject(error);
  }

  async getMovies({
    page = 1,
    language = LANGUAGES.English,
    category = CATEGORIES.Popular,
  }: {
    language: string;
    page?: number;
    category?: string;
  }) {
    try {
      const response = await this.apiClient.get(`/movie/${category}`, {
        params: {
          language,
          page,
          api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(
        `Error getting movies list ${error instanceof Error ? error.message : error}`,
      );
    }
  }
}

export default ApiService;
