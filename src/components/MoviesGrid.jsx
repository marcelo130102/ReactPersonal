import { MovieCard } from './MovieCard';
import styles from '../css/MoviesGrid.module.css';
import { useEffect, useState } from 'react';
import { get } from '../utilities/httpClient'
import { Spinner } from './Spinner';
import { useLocation } from 'react-router-dom';

function useQuery(){
  return new URLSearchParams(useLocation.search);
}

export function MoviesGrid (){

  const [movies, setMovies] = useState([]);
  const [isLoading, setItsloading] = useState(true);
  const query = useQuery();
  const search = query.get("search");

  useEffect(()=>[
    setItsloading(true),
    get("/discover/movie")
      .then(data => {
        setMovies(data.results);
        setItsloading(false);
        console.log(movies);
    }),
  ], []);

  if (isLoading){
    return <Spinner/>
  }

    return (
      <ul className = {styles.MoviesGrid}>
        {/*Recordar que cuando se usa el map, recorremos automaticamente todo el archivo o arreglo*/}
        {movies.map((movie)=>(
          <MovieCard key = {movie.id} movie = {movie}/>
      ))}
      </ul>
    );
  }