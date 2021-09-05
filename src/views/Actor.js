import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Loading from "../components/Loading";
import Movies from "../components/Movies";
import ButtonBack from "../components/ButtonBack";
import ActorInfo from "../components/ActorInfo";

const Actor = () =>{
    const [actorInfo, setActorInfo] = useState({})
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [moviesLoading, setMoviesIsLoading] = useState(true)
    const {id} = useParams()
    useEffect(() =>{
        axios(`https://api.themoviedb.org/3/person/${id}?api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => {
                setActorInfo(data)
                setIsLoading(false)
            })
        axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) =>{
                setMovies(data.cast)
                setMoviesIsLoading(false)
            })
    }, [id])
    if (isLoading && moviesLoading){
        return <Loading/>
    }
    return(
        <div className='container'>
            <ButtonBack/>
            {
                <ActorInfo actorInfo={actorInfo}/>
            }
            <h3>Movies:</h3>
            <Movies movies={movies}/>
        </div>
    )
}

export default Actor;