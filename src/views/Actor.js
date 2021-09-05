import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Loading from "../components/Loading";
import Movies from "../components/Movies";
import ButtonBack from "../components/ButtonBack";

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
                <>
                    <div className='grid'>
                        <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${actorInfo.profile_path}`} alt=""/>
                        <div>
                            <h3>{actorInfo.name}</h3>
                            <div key={actorInfo.id}><h4>Also known as:</h4>
                                {actorInfo.also_known_as.map(el =>
                                    <div>{el}</div>
                                )}
                            </div>
                            <div><h4>Famous for:</h4>{actorInfo.known_for_department}</div>
                            <div><h4>Birth place:</h4>{actorInfo.place_of_birth}</div>
                            {actorInfo.birthday ? <div><h4>Birthday:</h4>{actorInfo.birthday}</div> : ''}
                            {
                                actorInfo.gender === 2 ? <div><h4>Gender:</h4> Male</div> : <div><h4>Gender:</h4> Female</div>
                            }
                        </div>
                    </div>
                    {
                        actorInfo.biography ? <div><h4>Biography:</h4>{actorInfo.biography}</div> : ''
                    }
                </>
            }
            <h3>Movies:</h3>
            <Movies movies={movies}/>
        </div>
    )
}

export default Actor;