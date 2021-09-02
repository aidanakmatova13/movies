import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'

const Movie = () =>{
    const [info, setInfo] = useState({})
    const {id} = useParams()
    useEffect(() =>{
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => setInfo(data))
    }, [id])
    return(
        <div className='container'>
        <div className='grid'>
            <div>
                <h3>{info.original_title}</h3>
                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${info.backdrop_path}`} alt=""/>
            </div>
            <div>
                <i>{info.tagline}</i>
                <div>Description:<br/>
                    {info.overview}
                </div>
                {info.budget ? <p>Budget: {info.budget}</p> : ''}
            </div>
        </div>
        </div>
    )
}
export default Movie