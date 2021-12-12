import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {getPopularMovies, getUpcomingMovies} from '../../api/movies';

function Home() {
  const [movies, setMovies] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [moviesImages, setMoviesImages] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then(movies => setMovies(movies))
      .catch(err => console.log(err))
      .finally(() => setIsPending(false));
  }, []);

  useEffect(() => {
    getUpcomingMovies()
      .then(movies => {
        const images = [];
        movies.forEach(movie => {
          images.push(`https://image.tmdb.org/t/p/w500/${movie.poster_path}`);
        });
        setMoviesImages(images.slice(0, 4));
      })
      .catch(err => console.log(err))
      .finally(() => setIsPending(false));
  }, []);

  if (isPending) return <Text>Pending....</Text>;

  return (
    <>
      <SliderBox sliderBoxHeight={300} images={moviesImages} />
    </>
  );
}

export default Home;
