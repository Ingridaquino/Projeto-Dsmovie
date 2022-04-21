import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { MoviePage } from 'types/movies';
import "./styles.css";

type Props = {
    page: MoviePage;
    onChange: Function;
}

 const Pagination = ({ page, onChange} : Props) => {
     
    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" 
                    disabled={page.first}
                    onClick={() => onChange(page.number - 1)}
                    >
                    <AiFillCaretLeft className="arrow" />
                </button>
 
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="dsmovie-pagination-button" 
                    disabled={page.last}
                    onClick={() => onChange(page.number + 1)}
                    >
                    <AiFillCaretRight className="arrow"/>
                </button>
            </div>
        </div>
    );
}

export default Pagination;