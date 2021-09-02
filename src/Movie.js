import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'
import {useHistory} from "react-router-dom";

const Movie = () =>{
    const [info, setInfo] = useState({})
    const [actor, setActor] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory()
    const {id} = useParams()
    useEffect(() =>{
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => {
                setInfo(data)
                setIsLoading(false)
            })
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?&language=%27rus%27&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => setActor(data.cast))
    }, [id])
    const Back = () =>{
        history.goBack()
    }
    if (isLoading){
        return <div className='container'>Loading ...</div>
    }else {
        return(
            <div className='container'>
                <button onClick={Back}>&laquo; Go back</button>
                <div className='grid'>
                    <div>
                        <h3>{info.original_title}</h3>
                        <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${info.poster_path}`} alt={info.title}/>
                    </div>
                    <div>
                        <i>{info.tagline}</i>
                        <div>Description:<br/>{info.overview}</div>
                        {info.budget ? <p>Budget: {info.budget} $</p> : ''}
                        <div>Countries: {
                            info.production_countries[0].name
                        }</div>

                    </div>
                </div>
                <h3>Cast:</h3>
                <div className='row'>
                    {
                        actor.map(el =>
                            <div key={el.id} className='col-3'>
                                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.profile_path}`} alt=""/>
                                <h3>{el.name}</h3>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Movie