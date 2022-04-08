import { Link } from 'react-router-dom';
import styles from '../css/MovieCard.module.css';
import {getImage} from '../utilities/getImage'

export function MovieCard({movie}){
    const imgUrl= getImage(movie.poster_path, 300);
    return(
        <li className = {styles.MovieCard}>
            <Link to={"/movies/" + movie.id}>
                <img 
                className = {styles.MovieImage} 
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