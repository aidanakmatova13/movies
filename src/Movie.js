import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useHistory} from "react-router-dom";
import axios from "axios";
import man from './Image/avatar.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ModalVideo from 'react-modal-video'

const Movie = () =>{
    const [info, setInfo] = useState({})
    const [actor, setActor] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [actorLoading, setActorIsLoading] = useState(true)
    const [trailers, setTrailers] = useState([])
    const [isOpen, setOpen] = useState(false)
    const history = useHistory()
    const {id} = useParams()

    useEffect(() =>{
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => {
                setInfo(data)
                setIsLoading(false)
            })
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?&language=%27rus%27&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => {
                setActor(data.cast)
                setActorIsLoading(false)
            })
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?&language=%27rus%27&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) =>{
                setTrailers(data.results)
            })
    }, [id])
    const Back = () =>{
        history.goBack()
    }

    if (isLoading && actorLoading){
        return <div className='container'>Loading ...</div>
    }
        return(
            <div className='container'>
                <button className='back-btn' onClick={Back}>&laquo; Go back</button>
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
                <div className='row'>
                <OwlCarousel className='owl-theme' items={8} loop margin={10} dots={false}>
                    {
                        actor.map(el =>
                            <div key={el.id}>
                                <Link to={`/person/${el.id}`} key={el.name}>
                                    {el.profile_path === null ? <img src={man} alt="" height='210' width='300'/> :<img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.profile_path}`} alt=""/>}
                                    <h3>{el.name}</h3>
                                </Link>
                            </div>
                        )
                    }
                </OwlCarousel >
                </div>
                <h3>Trailers: </h3>
                <div className='grid-2'>
                    {
                        trailers.map(el =>
                            <>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={el.key} onClose={() => setOpen(false)} />
                                <button className="btn-primary" onClick={()=> setOpen(true)}>
                                    <svg className="circle-fill">
                                        <circle cx="41" cy="41" r="37" stroke="transparent" opacity='0.7' stroke-width="1"></circle>
                                        <polygon fill="white" stroke="transparent" stroke-width="1"
                                                 points="32,25 32,58 60,42"></polygon>
                                    </svg>
                                    <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${info.poster_path}`} alt=""/>
                                </button>
                            </>
                        )
                    }
                </div>
            </div>
        )
}

export default Movie;