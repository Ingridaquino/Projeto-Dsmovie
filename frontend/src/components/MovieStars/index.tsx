import {BsStarFill, BsStarHalf, BsStar} from "react-icons/bs";
import "./styles.css";


type Props = {
    score: number;
}

type StarProps = {
    fill: number;
}


//Exemplo
//getFills(3.5) => [1, 1, 1, 0.5, 0]
//getFills(4.1) => [1, 1, 1, 1, 0.5]


//Função que irá defini as estrela de acordo com a nota do filme
function getFills(score: number) {

    const fills = [0, 0, 0, 0, 0,];

    const integerPart = Math.floor(score);

    for (let i = 0; i < integerPart; i++){
        fills[i] = 1;
    }

    const diff = score - integerPart;
    if(diff > 0) {
        fills[integerPart] = 0.5;
    }

    return fills;
}

function Star( {fill} : StarProps){
    if(fill === 0) {
        return <BsStar />
    }
    else if(fill === 1){
        return <BsStarFill />
    }
    else {
        return <BsStarHalf />
    }
}


function MovieStars({ score } : Props) {

    const fills = getFills(score);

    return (
        <div className="dsmovie-stars-container">
            <Star fill={fills[0]} />
            <Star fill={fills[0]} />
            <Star fill={fills[0]} />
            <Star fill={fills[0]} />
            <Star fill={fills[0]} />
        </div>
    );
}

export default MovieStars;