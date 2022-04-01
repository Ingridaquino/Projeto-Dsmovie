import {BsStarFill, BsStarHalf, BsStar} from "react-icons/bs";
import "./styles.css";

function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
            <BsStar />
        </div>
    );
}

export default MovieStars;