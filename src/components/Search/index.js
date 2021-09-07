import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import Loading from "../Loading";
import empty from '../Image/57c9b683a68e1.png'
import ButtonBack from "../ButtonBack";

const Search = () =>{
    const [page, setPage] = useState(1)
    const [films, setFilms] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {name} = useParams()
    useEffect(() =>{
        axios(`https://api.themoviedb.org/3/search/movie?api_key=6f19f87e3380315b9573c4270bfc863c&language=%27rus%27&query=${name}&page=${page}&include_adult=false`)
            .then(({data}) =>{
                setFilms(data)
                setIsLoading(false)
            })
    },[page, name])
    const next = () =>{
        setPage(page+1)
    }
    const prev = () =>{
        setPage(page-1)
    }
    const Btns = () =>{
        if (page===1){
            return <button className='next-prev' onClick={next}>NEXT  &#9658;</button>
        } else if (page === films.total_pages){
            return <button className='next-prev' onClick={prev}> &#9668;  PREV</button>
        } else{
            return <div>
                <button className='next-prev' onClick={prev}> &#9668;  PREV</button>
                <button className='next-prev' onClick={next}>NEXT  &#9658;</button>
            </div>
        }
    }
    if (isLoading){
        return <Loading/>
    }
    return(
        <div key={films.id} className='container'>
            <ButtonBack/>
            <div className='grid-2'>
            {
                films.results.slice(0,8).map(film =>
                    <div className='box'>
                        <Link to={`/movie/${film.id}`} key={film.id}>
                            {film.poster_path?<img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${film.poster_path}`} alt=""/>:<img height='320' src={empty} alt=""/>}
                            <h3>{film.original_title}</h3>
                        </Link>
                    </div>
                )
            }
            </div>
            <div className='btn-np'>
                <Btns/>
            </div>
        </div>
    )
}

export default Search;