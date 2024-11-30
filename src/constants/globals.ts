export const IMAGES_URL = 'https://image.tmdb.org/t/p/original';
export const DATA_URL = 'https://api.themoviedb.org/3';

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: LanguagesType;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface datesRange {
  maximum: string;
  minimum: string;
}

type MovieList = Movie[];

export interface Response {
  dates?: datesRange;
  results?: MovieList;
  page: number;
  total_pages: number;
  total_results: number;
}

export const LANGUAGES = {
  English: 'en',
  Spanish: 'es',
} as const;

export type LanguagesType = (typeof LANGUAGES)[keyof typeof LANGUAGES];

export const GetLanguageKeys = (val: LanguagesType) => {
  const objectInverted = Object.fromEntries(
    Object.entries(LANGUAGES).map(([key, value]) => [value, key]),
  );
  return objectInverted[val] || '';
};

export interface Language {
  label: string;
  value: LanguagesType;
}

export type LanguageList = Language[];

export const RULES = {
  Primes: 'primes',
  OddEven: 'oe',
  None: '',
} as const;

export type RulesType = (typeof RULES)[keyof typeof RULES];

export const GetRulesKeys = (val: RulesType) => {
  const objectInverted = Object.fromEntries(
    Object.entries(RULES).map(([key, value]) => [value, key]),
  );
  return objectInverted[val] || '';
};
export interface Rule {
  label: string;
  value: RulesType;
}

export type RuleList = Rule[];

export const CATEGORIES = {
  Popular: 'popular',
  Now_Playing: 'now_playing',
  Most_Rated: 'most_rated',
  Upcoming: 'upcoming',
} as const;

export type CategoriesType = (typeof CATEGORIES)[keyof typeof CATEGORIES];

export const GetCategoriesKeys = (val: CategoriesType) => {
  const objectInverted = Object.fromEntries(
    Object.entries(CATEGORIES).map(([key, value]) => [value, key]),
  );
  return objectInverted[val] || '';
};

export interface Category {
  label: string;
  value: CategoriesType;
}

export type CategoryList = Category[];

export interface GlobalState {
  response: Response | null;
  movies: MovieList;
  isLoading: boolean;
  error: string | null;
}
export interface SelectedMovieState {
  selectedMovie: Movie | null;
}
export interface FiltersState {
  rule: Rule | null;
  language: Language | null;
  category: Category | null;
}
