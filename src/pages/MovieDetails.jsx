import styles from '../css/MovieDetails.module.css';
import { useParams } from 'react-router-dom';
import { get } from '../utilities/httpClient'
import { useEffect, useState } from 'react';
import { Spinner } from '../components/Spinner';
import { getImage } from '../utilities/getImage';

export function MovieDetails(){
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setItsloading] = useState(true);

    useEffect(()=>[
        setItsloading(true),

        get("/movie/" + movieId).then(data => {
            setMovie(data);
            setItsloading(false);
        })
    ], [movieId])
    if(isLoading) {
        return <Spinner/>;
    }
    
    const imgUrl = getImage(movie.poster_path, 500); 

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