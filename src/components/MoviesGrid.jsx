import { MovieCard } from './MovieCard';
import styles from '../css/MoviesGrid.module.css';
import { useEffect, useState } from 'react';
import { get } from '../utilities/httpClient'

export function MoviesGrid (){

  const [movies, setMovies] = useState([]);

  useEffect(()=>[
    get("/discover/movie")
      .then(data => {
        setMovies(data.results);
        console.log(movies);
    }),
  ], []);
    return (
      <ul className = {styles.MoviesGrid}>
        {/*Recordar que cuando se usa el map, recorremos automaticamente todo el archivo o arreglo*/}
        {movies.map((movie)=>(
          <MovieCard key = {movie.id} movie = {movie}/>
      ))}
      </ul>
    );
  }