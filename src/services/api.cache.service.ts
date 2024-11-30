import axios from 'axios';
import { DATA_URL } from '../constants';

const API_KEY = import.meta.env.VITE_API_KEY;

const axiosInstance = axios.create({
  baseURL: DATA_URL,
});

axiosInstance.interceptors.request.use(config => {
  if (!config.params) {
    config.params = {};
  }
  config.params = {
    ...config.params,
    api_key: API_KEY,
  };
  return config;
});

export const CachedQuery =
  () =>
    async ({ url, method, data, params }: any) => {
      try {
        const result = await axiosInstance({ url, method, data, params });
        if (!result.data || !Array.isArray(result.data.results)) {
          throw new Error('Invalid data format from API');
        }
        return { data: result.data };
      } catch (axiosError: any) {
        return {
          error: {
            status: axiosError.response?.status,
            data: axiosError.response?.data || axiosError.message,
          },
        };
      }
    };
