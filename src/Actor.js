import {useEffect, useState} from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";

const Actor = () =>{
    const [actorInfo, setActorInfo] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory()
    const {id} = useParams()
    useEffect(() =>{
        axios(`https://api.themoviedb.org/3/person/${id}?api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => {
                setActorInfo(data)
                setIsLoading(false)
            })
    }, [id])
    const Back = () =>{
        history.goBack()
    }
    if (isLoading){
        return <div className='container'>Loading ...</div>
    }
    return(
        <div className='container'>
            <button onClick={Back}> &laquo; Go back</button>
            {
                <>
                    <div className='grid'>
                        <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${actorInfo.profile_path}`} alt=""/>
                        <div>
                            <h3>{actorInfo.name}</h3>
                            <div><h4>Also known as:</h4>
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
        </div>
    )
}
export default Actor