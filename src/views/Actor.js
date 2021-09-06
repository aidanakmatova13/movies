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
    const [movieLoading, setMovieIsLoading] = useState(true)
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
                setMovieIsLoading(false)
            })
    }, [id])
    if (isLoading || moviesLoading || movieLoading){
        return <Loading/>
    }
    return(
        <div className='container'>
            <ButtonBack/>
            {
                <ActorInfo actorInfo={actorInfo}/>
            }
            <h3>Famous for movies:</h3>
            {/*<Movies movies={movies}/>*/}
            {
                <div>
                    {movies.filter(el => !el.release_date).sort((a,b) => new Date(b) - new Date(b)).map(el =>
                        <>
                            <h3>{el.title}</h3>
                        </>
                    )}


                    {movies.filter(el =>el.release_date).sort((a,b) => new Date(b) - new Date(b)).map(el =>
                        <>
                            <div>{el.release_date}</div>
                            <h3>{el.title}</h3>
                        </>
                    )}
                </div>
            }
        </div>
    )
}
export default Actor;