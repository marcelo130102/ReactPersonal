import movie from './movies.json';
import styles from '../css/MovieDetails.module.css';

export function MovieDetails(){
    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path; 

    return <div className={styles.detailsContainer}>
                
                <img 
                className={`${styles.col} ${styles.movieImage}`}
                src = {imgUrl} 
                alt = {movie.tittle} 
                />
                <div className={`${styles.col} ${styles.movieDetails}`}>
                    <p><strong>Tittle:</strong> {movie.title}</p>
                    <p><strong>Description:</strong> {movie.overview}</p>
                    <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(", ")}</p>
                </div>
        </div>;
}