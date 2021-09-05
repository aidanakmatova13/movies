import {useState} from "react";
import axios from "axios";
import {Link, useHistory, useParams} from "react-router-dom";
import man from "./Image/avatar.jpg";

const Cast = () =>{
    const [cast, setCast] = useState()
    const {id} = useParams()
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(true)

    axios(`https://api.themoviedb.org/3/movie/${id}/credits?&language=%27rus%27&api_key=6f19f87e3380315b9573c4270bfc863c`)
        .then(({data}) => {
            setCast(data.cast)
            setIsLoading(false)
}, [id])
    const Back = () =>{
        history.goBack()
    }
    if (isLoading){
        return <div className='container'>Loading ...</div>
    }
    return(
        <div className='container'>
            <button className='back-btn' onClick={Back}>&laquo; Go back</button>
            <div className='grid-2'>
            {
                cast.map(el =>
                    <div className='box' key={el.id}>
                        <Link to={`/actor/${el.id}`} key={el.name}>
                            {el.profile_path === null ? <img src={man} alt="" height='390' width='300'/> :<img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.profile_path}`} alt=""/>}
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