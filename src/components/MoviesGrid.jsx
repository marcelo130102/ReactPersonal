import { MovieCard } from './MovieCard';
import styles from '../css/MoviesGrid.module.css';
import { useEffect, useState } from 'react';
import { get } from '../utilities/httpClient'
import { Spinner } from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Empty } from './Empty';

export function MoviesGrid ({search}){

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1)
  const [itsLoading, setItsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(()=>{
    setItsLoading(true);
    const searchURL = search 
    ? "/search/movie?query=" + search + "&page=" + page
    : "/discover/movie?page=" + page;
    get(searchURL)
      .then(data => {
        setMovies((prevMovies) => prevMovies.concat(data.results));
        setHasMore(data.page < data.total_pages)
        setItsLoading(false);
    });
  }, [search, page]);

  if (!itsLoading && movies.length === 0){
    return <Empty/>
  }

    return (
      <InfiniteScroll
        dataLength={movies.length} 
        hasMore = {hasMore}
        next={()=> setPage((prevPage) => prevPage + 1 )}
        loader={<Spinner/>}>
        <ul className = {styles.MoviesGrid}>
          {/*Recordar que cuando se usa el map, recorremos automaticamente todo el archivo o arreglo*/}
          {movies.map((movie)=>(
            <MovieCard key = {movie.id} movie = {movie}/>
        ))}
        </ul>
      </InfiniteScroll>
    );
  }