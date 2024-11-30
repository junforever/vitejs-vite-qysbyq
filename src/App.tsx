import { useEffect, useRef } from 'react';
import {
  GetLanguageKeys,
  LanguageList,
  LANGUAGES,
  RULES,
  RuleList,
  GetRulesKeys,
  CategoryList,
  CATEGORIES,
  GetCategoriesKeys,
} from './constants';
import { Header } from './components/index.ts';
import { MoviesList } from './components';
import {
  loadEnd,
  loadStart,
  processQueryResult,
  setError,
  useAppDispatch,
  useAppSelector,
} from './store';
import { Spinner } from './components/Spinner/Spinner.tsx';
import { Toast } from './components/Toast/Toast.tsx';
import { debounce } from './utils/functions.ts';
import { useLazyGetMoviesQuery } from './store/Movies/moviesApiSlice.ts';
import { LoadError } from './components/LoadError/LoadError.tsx';

const rules: RuleList = [
  { value: RULES.None, label: GetRulesKeys(RULES.None) },
  { value: RULES.Primes, label: GetRulesKeys(RULES.Primes) },
  { value: RULES.OddEven, label: GetRulesKeys(RULES.OddEven) },
];

const languages: LanguageList = [
  { value: LANGUAGES.English, label: GetLanguageKeys(LANGUAGES.English) },
  { value: LANGUAGES.Spanish, label: GetLanguageKeys(LANGUAGES.Spanish) },
];

const categories: CategoryList = [
  { value: CATEGORIES.Popular, label: GetCategoriesKeys(CATEGORIES.Popular) },
  {
    value: CATEGORIES.Now_Playing,
    label: GetCategoriesKeys(CATEGORIES.Now_Playing),
  },
  {
    value: CATEGORIES.Most_Rated,
    label: GetCategoriesKeys(CATEGORIES.Most_Rated),
  },
  {
    value: CATEGORIES.Upcoming,
    label: GetCategoriesKeys(CATEGORIES.Upcoming),
  },
];

function App() {
  const dispatch = useAppDispatch();
  const currentPage = useRef(1);
  const { response } = useAppSelector(state => state.movies);
  const { category, language } = useAppSelector(state => state.filters);
  const [triggerGetMovies, { data: cachedResponse, isLoading, error }] =
    useLazyGetMoviesQuery();

  useEffect(() => {
    if (!error) {
      console.log('cambia');
      dispatch(processQueryResult(cachedResponse));
    }
  }, [cachedResponse]);

  useEffect(() => {
    triggerGetMovies({
      page: 1,
      category: category?.value || '',
      language: language?.value,
    });
  }, [category, language]);

  useEffect(() => {
    const validatedPage = response?.page || 0;
    if (validatedPage > 1) {
      window.scrollTo({
        top: document.body.scrollHeight - 1500,
        behavior: 'auto',
      });
    }
  }, [response]);

  const handleScroll = () => {
    if (
      document.body.scrollHeight - 100 <
      window.scrollY + window.innerHeight
    ) {
      const validatedPage = response?.page || 0;
      if (!validatedPage || validatedPage < currentPage.current) return;

      currentPage.current = validatedPage + 1;

      triggerGetMovies({
        page: validatedPage + 1,
        category: category?.value || '',
        language: language?.value,
      });
    }
  };

  window.addEventListener('scroll', debounce(handleScroll, 300));

  return (
    <>
      <Header
        title="TOP Movies"
        languages={languages}
        rules={rules}
        categories={categories}
      />
      {isLoading && <Spinner />}
      {error && <Toast text="Error loading movies data" />}
      {error ? <LoadError /> : <MoviesList />}
    </>
  );
}

export default App;
