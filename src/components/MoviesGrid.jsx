import movies from '../database/movies.json';
import { MovieCard } from './MovieCard';
import styles from '../css/MoviesGrid.module.css'

export function MoviesGrid (){
    return (
      <ul className = {styles.MoviesGrid}>
        {/*Recordar que cuando se usa el map, recorremos automaticamente todo el archivo o arreglo*/}
        {movies.map((movie)=>(
          <MovieCard key = {movie.id} movie = {movie}/>
      ))}
      </ul>
    );
  }