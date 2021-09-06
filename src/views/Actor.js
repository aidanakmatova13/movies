import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Loading from "../components/Loading";
import Movies from "../components/Movies";
import {Link} from "react-router-dom";
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
            <h3>Famous movies:</h3>
            {/*<Movies movies={movies}/>*/}
            {<div className='grid'>
                <div>
                    <div key={actorInfo.id}><h4>Also known as:</h4>
                        {actorInfo.also_known_as.map(el =>
                            <div>{el}</div>
                        )}
                    </div>
                    <div><h4>Famous for:</h4>{actorInfo.known_for_department}</div>
                    {actorInfo.place_of_birth ? <div><h4>Birth place:</h4>{actorInfo.place_of_birth}</div> : ''}
                    {actorInfo.birthday ? <div><h4>Birthday:</h4>{actorInfo.birthday}</div> : ''}
                    {
                        actorInfo.gender === 2?<div><h4>Gender:</h4> Male</div>:<div><h4>Gender:</h4> Female</div>
                    }
                </div>
                <div>
                    <h3>Movies:</h3>
                        {movies.filter(el => !el.release_date).sort((a,b) => new Date(a.release_date) - new Date(b.release_date)).map(el =>
                            <div className='movies-content'>
                                <div className='sign'>&#8212;   </div>
                                <Link to={`/movie/${el.id}`}>
                                    <div className='movies-content'>
                                        <h4>{el.title}</h4>
                                        <i><h4 className='as'>(as  {el.character})</h4></i>
                                    </div>
                                </Link>
                            </div>
                        )}
                        {movies.filter(el =>el.release_date).sort((a,b) => new Date(a.release_date) - new Date(b.release_date)).map(el =>
                            <div className='movies-content'>
                                <div>{el.release_date}</div>
                                <Link to={`/movie/${el.id}`}>
                                    <div className='movies-content'>
                                        <h4>{el.title}</h4>
                                        <i><h4 className='as'>(as  {el.character})</h4></i>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            }
        </div>
    )
}
export default Actor