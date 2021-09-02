import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Page = () => {
    const [page, setPage] = useState(1)
    const [movie, setMovie] = useState([])
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/discover/movie?page=${page}&language='rus'&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => setMovie(data.results))
    }, [page])

    const handlePage = (num) => {
        setPage(num)
    }
    return (
        <div className='container'>
            {
                Array(6).fill(0).map((el, idx) =>
                    <button className='btn' onClick={() => handlePage(idx+1)}>{idx+1}</button>
                )
            }
            <div className='row'>
            {
                movie.map(el =>
                    <div className='col-3'>
                        <div className='box'>
                            <Link to={`/movie/${el.id}`} key={el.id}>
                                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.backdrop_path}`}/>
                                <h4>{el.original_title}</h4>
                            </Link>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    )
}
export default Page