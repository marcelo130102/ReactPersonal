import {MoviesGrid} from './components/MoviesGrid';
import styles from './css/App.module.css';
import {MovieDetails} from './pages/MovieDetails'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import { LandingPage } from './components/LandingPage';


export function App(){
    return (
        <Router>
            <header>
                <Link to="/"><h1 className={styles.title}>Movies</h1></Link>
            </header>
            <main>
                <Routes>
                    <Route exact path="/movies/:movieId" element={<MovieDetails/>}/>
                    <Route exact path="/" element={<LandingPage/>}/>
                </Routes>
                
            </main>
        </Router>
    );
}