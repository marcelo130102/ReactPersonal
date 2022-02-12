import { Link } from 'react-router-dom';
import styles from '../css/MovieCard.module.css'

export function MovieCard({movie}){
    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path; 
    return(
        <li className = {styles.MovieCard}>
            <Link to={"/movies/" + movie.id}>
                <img 
                class Name = {styles.MovieImage} 
                src = {imgUrl} 
                alt = {movie.tittle} 
                width = {230} 
                height = {345}
                />
            <div> {movie.title} </div>
            </Link>
        </li>
    );
};