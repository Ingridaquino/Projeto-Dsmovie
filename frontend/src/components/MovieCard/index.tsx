import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";
import { Movie } from "types/movies";
import "./styles.css";

type Props = {
    movie: Movie;
}

function MovieCard( {movie} : Props) {
 
    return (
        <div className="dsmovie-card-container">
            <img src={movie.image} alt={movie.title} className="dsmovie-movie-card-image" />
            <div className="dsmovie-card-bottom-container">
                <MovieScore />

                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    );
}

export default MovieCard;