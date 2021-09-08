import {useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import Loading from "../components/Loading";
import man from "../components/Image/avatar.jpg";
import ButtonBack from "../components/ButtonBack";

const Cast = () =>{
    const [cast, setCast] = useState([])
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)

    axios(`https://api.themoviedb.org/3/movie/${id}/credits?&language=%27rus%27&api_key=6f19f87e3380315b9573c4270bfc863c`)
        .then(({data}) => {
            setCast(data.cast)
            setIsLoading(false)
}, [id])
    if (isLoading){
        return <Loading/>
    }
    return(
        <div className='container'>
            <ButtonBack/>
            <div className='grid-2'>
                {
                    cast.map(el =>
                        <div className='box' key={el.id}>
                            <Link to={`/actor/${el.id}`} key={el.name}>
                                {el.profile_path === null ? <div className='img-box'><img src={man} alt="" height='100%'/></div> :<div className='img-box'><img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.profile_path}`} alt=""/></div>}
                                <h3>{el.name}</h3>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Cast