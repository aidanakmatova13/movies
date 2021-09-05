import {useState} from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";

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
        <div>
            <button className='back-btn' onClick={Back}>&laquo; Go back</button>
        </div>
    )
}
export default Cast