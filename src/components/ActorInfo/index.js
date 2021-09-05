const ActorInfo = ({actorInfo}) =>{
    return(
        <div>
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
        </div>
    )
}
export default ActorInfo