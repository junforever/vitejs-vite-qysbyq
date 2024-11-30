import { IMAGES_URL, Movie } from '../../constants';
import styles from './MovieCard.module.css';
import { useAppDispatch } from '../../store';
import { setSelectedMovie } from '../../store';
import { useState } from 'react';

export const MovieCard = ({
  movie,
  onCardSelect,
  cssClass,
}: {
  movie: Movie;
  onCardSelect: () => void;
  cssClass: string;
}) => {
  const { poster_path, title, release_date } = movie;
  const year = release_date.split('-');
  const dispatch = useAppDispatch();
  const onCardClick = () => {
    dispatch(setSelectedMovie(movie));
    onCardSelect();
  };

  const [isLoaded, setIsLoaded] = useState(false);

  const onLoadImage = () => {
    setIsLoaded(true);
  };

  return (
    <div
      data-testid="image-card-container"
      className={`card card-compact bg-base-100 w-full h-full ${styles.cardContainer}`}
      onClick={onCardClick}>
      <figure className={`relative ${styles.cardImage}`}>
        {!isLoaded && (
          <img
            src="https://dummyimage.com/307x457/000/fff"
            alt="Placeholder"
            className="blur-lg"
          />
        )}
        <img
          src={`${IMAGES_URL}${poster_path}`}
          alt={title}
          onLoad={onLoadImage}
          className={isLoaded ? 'block' : 'hidden'}
        />
      </figure>
      <div
        className={`flex justify-between items-start p-4 gap-x-4 overflow-hidden ${styles[cssClass]} ${styles.cardLegend} rounded-b-2xl`}>
        <h2 className={`text-xl mb-0 overflow-hidden ${styles.truncatedText}`}>
          {title}
        </h2>
        <span className="block text-base mt-[0.35rem]">{year[0]}</span>
      </div>
    </div>
  );
};
