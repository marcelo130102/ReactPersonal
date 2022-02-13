import styles from '../css/MovieDetails.module.css';
import { useParams } from 'react-router-dom';
import { get } from '../utilities/httpClient'
import { useEffect, useState } from 'react';

export function MovieDetails(){
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    useEffect(()=>[
        get("/movie/" + movieId).then(data => {
            setMovie(data);
        })
    ], [movieId])

    if(!movie){
        return null;
    }

    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path; 

    return <div className={styles.detailsContainer}>
                
                <img 
                className={`${styles.col} ${styles.movieImage}`}
                src = {imgUrl} 
                alt = {movie.tittle} 
                />
                <div className={`${styles.col} ${styles.movieDetails}`}>
                    <p className={styles.firstItem}>
                        <strong>Tittle:</strong> {movie.title}
                    </p>
                    <p>
                        <strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(", ")}
                    </p>
                    <p>
                        <strong>Description:</strong> {movie.overview}
                    </p>
                </div>
        </div>;
}