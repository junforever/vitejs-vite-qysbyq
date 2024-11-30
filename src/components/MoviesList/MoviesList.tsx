import React, { useRef } from 'react';
import { useAppSelector } from '../../store';
import { MovieCard } from '../MovieCard';
import { MoviePopUp } from '../MoviePopUp/MoviePopUp';
import styles from './MovieList.module.css';
import { RULES } from '../../constants';
import { isEven, isPrime } from '../../utils/functions';

export const MoviesList = React.memo(() => {
  const { movies } = useAppSelector(state => state.movies);
  const { rule } = useAppSelector(state => state.filters);
  const modalRef = useRef<HTMLDialogElement>(null);
  const onCardSelect = () => {
    modalRef.current?.showModal();
  };

  return (
    <>
      <ul className={styles.cardList}>
        {movies.map((movie, index) => {
          let cssClass = '';
          if (rule?.value === RULES.Primes) {
            cssClass = isPrime(index) ? 'prime' : 'notPrime';
          } else if (rule?.value === RULES.OddEven) {
            cssClass = isEven(index) ? 'even' : 'odd';
          }

          return (
            <li key={crypto.randomUUID()}>
              <MovieCard
                movie={movie}
                onCardSelect={onCardSelect}
                cssClass={cssClass}
              />
            </li>
          );
        })}
      </ul>
      <MoviePopUp modalRef={modalRef} />
    </>
  );
});

MoviesList.displayName = 'MoviesList';
