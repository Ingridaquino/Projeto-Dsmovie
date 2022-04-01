import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import "./styles.css";

function Pagination() {
    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={true}>
                    <AiFillCaretLeft className="arrow" />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsmovie-pagination-button" disabled={false}>
                    <AiFillCaretRight className="arrow"/>
                </button>
            </div>
        </div>
    );
}

export default Pagination;