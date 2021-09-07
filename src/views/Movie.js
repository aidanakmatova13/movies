import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import man from '../Image/avatar.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ModalVideo from 'react-modal-video'
import Loading from "../components/Loading";
import ButtonBack from "../components/ButtonBack";


const Movie = () =>{
    const [info, setInfo] = useState({})
    const [actor, setActor] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [actorLoading, setActorIsLoading] = useState(true)
    const [trailers, setTrailers] = useState([])
    const [isOpen, setOpen] = useState(false)
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

    if (isLoading || actorLoading){
        return <Loading/>
    }
        return(
            <div className='container'>
                <ButtonBack/>
                <div className='grid'>
                    <div>
                        <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${info.backdrop_path}`} alt={info.title}/>
                    </div>
                    <div>
                        <h2>{info.original_title}</h2>
                        <div key={info.id}>{info.release_date}({info.production_countries.map(el => el.iso_3166_1)})</div>
                        <div key={info.id}>
                                <h4>Genre: </h4>
                                {
                                    info.genres.map(el =>
                                        <li>
                                            {el.name}
                                        </li>
                                    )
                                }
                        </div>
                        <div key={info.id}><h4>Countries: </h4> {
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
                            {Math.floor(info.runtime / 60)} h {Math.floor(info.runtime % 60)} m
                        </div>
                        {info.tagline ? <div><h4>Description:</h4><div><i>{info.tagline}</i></div>{info.overview}</div> : ''}
                        {info.budget ? <div><h4>Budget:</h4>{info.budget.toLocaleString()}$</div> : ''}
                        <div>
                            <h4>Revenue:
                            </h4>
                            {info.revenue.toLocaleString()}$
                        </div>
                    </div>
                </div>
                <h2 className='cast'>Cast:</h2>
                <div className='row'>
                <OwlCarousel className='owl-theme' items={8} margin={10} >
                    {
                        actor.slice(0,10).map(el =>
                            <div className='box' key={el.id}>
                                <Link to={`/actor/${el.id}`} key={el.name}>
                                    {el.profile_path === null ? <img src={man} alt="" height='165' width='300'/> :<img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.profile_path}`} alt=""/>}
                                    <h3>{el.name}</h3>
                                </Link>
                            </div>
                        )
                    }
                    <Link to={`/cast/${id}`}>Show all cast</Link>
                </OwlCarousel >
                </div>
                <div className='grid-2'>
                    {
                        trailers.map(el =>
                            <div className='trailer'>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={el.key} onClose={() => setOpen(false)} />
                                <button className="btn-primary" onClick={()=> setOpen(true)}>
                                    <svg className="circle-fill">
                                        <circle cx="41" cy="41" r="37" stroke="transparent" opacity='0.7' stroke-width="1"></circle>
                                        <polygon fill="white" stroke="transparent" stroke-width="1"
                                                 points="32,25 32,58 60,42"></polygon>
                                    </svg>
                                    <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${info.poster_path}`} alt=""/>
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        )
}

export default Movie;