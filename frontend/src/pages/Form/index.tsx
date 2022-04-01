import { Link } from "react-router-dom";
import "./styles.css"

function Form() {

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/e5iqR3k7azXGK1tGaOLMnKycGku.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return (
        <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title}/>
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <form className="dsmovie-form" action="">
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Inform seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>

                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe seu avaliação</label>
                        <select className="form-control" id="score">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                        </select>
                    </div>
                </form>
                <div className="dsmovie-form-btn-container">
                    <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                </div>
                <Link to="/"> 
                    <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                </Link>
            </div>
        </div>
    );
}

export default Form;