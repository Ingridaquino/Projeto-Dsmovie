import MovieCard from "components/MovieCard";
import axios from "axios";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";
import { useState, useEffect } from "react";
import { MoviePage } from "types/movies";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });


    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
        .then(response => {
            const data = response.data as MoviePage; 
            setPage(data);
        });
    }, [pageNumber]);

        //Forma errada que me retorna 2 vez a requisicao ou seja para previnir esse tipo de comportamento preciso trabalhar com os hooks(use states) do react
        // axios.get(`${BASE_URL}/movies?size=12&page=0`)
        //   .then(response => {
        //     console.log(response.data)
        //   })


        // Pagination vai chamar essa função
    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>
            <Pagination page={page} onChange={handlePageChange}/>

            <div className="container">
                <div className="row">
                    {page.content.map(movie => (
                    <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard movie={movie}/>
                    </div>
                    )
                )}
                </div>
            </div>
        </>
    );
}

export default Listing;