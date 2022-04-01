import MovieScore from "components/MovieScore";
import "./styles.css";

function MovieCard() {
    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/e5iqR3k7azXGK1tGaOLMnKycGku.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return (
        <div className="dsmovie-card-container">
            <img src={movie.image} alt={movie.title} className="dsmovie-movie-card-image" />
            <div className="dsmovie-card-bottom-container">
                <MovieScore />
                <div className="btn btn-primary dsmovie-btn">Avaliar</div>
            </div>
        </div>
    );
}

export default MovieCard;