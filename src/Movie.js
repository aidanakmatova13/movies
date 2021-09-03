import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from 'react-router-dom'
import {useHistory} from "react-router-dom";
import man from './Image/avatar.jpg'

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
    }
        return(
            <div className='container'>
                <button onClick={Back}>&laquo; Go back</button>
                <div className='grid'>
                    <div>
                        <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${info.backdrop_path}`} alt={info.title}/>
                    </div>
                    <div>
                        <h2>{info.original_title}</h2>
                        <div>{info.release_date}({info.production_countries.map(el => el.iso_3166_1)})</div>
                        <div>
                                <h4>Genre: </h4>
                                {
                                    info.genres.map(el =>
                                        <li>
                                            {el.name}
                                        </li>
                                    )
                                }
                        </div>
                        <div><h4>Countries: </h4> {
                            info.production_countries.map(el =>
                                <p>
                                    {el.name}
                                </p>
                            )
                        }
                        </div>
                        <div>
                            <h4>
                                Runtime:
                            </h4>
                            {info.runtime/60}hours
                        </div>
                        <div><h4>Description:</h4><div><i>{info.tagline}</i></div>{info.overview}</div>
                        {info.budget ? <div><h4>Budget:</h4>{info.budget.toLocaleString()}$</div> : ''}
                        <div>
                            <h4>Revenue:
                            </h4>
                            {info.revenue.toLocaleString()}$
                        </div>
                    </div>
                </div>
                <h3>Cast:</h3>
                {/*{*/}
                {/*    Array(10).fill(0).map((el, idx) =>*/}
                {/*        <button className='btn' onClick={() => handlePage(idx+1)}>{idx+1}</button>*/}
                {/*    )*/}
                {/*}*/}
                <div className='row'>
                    {
                        actor.map(el =>
                            <div key={el.id} className='col-3'>
                                <Link to={`/person/${el.id}`} key={el.name}>
                                    {el.profile_path === null ? <img src={man} alt="" height='400' width='300'/> :<img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.profile_path}`} alt=""/>}
                                    <h3>{el.name}</h3>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        )
}

export default Movie