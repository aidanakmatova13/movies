const ActorInfo = ({actorInfo}) =>{
    return(
        <div>
            <div className='grid'>
                <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${actorInfo.profile_path}`} alt=""/>
                <div>
                    <h2>{actorInfo.name}</h2>
                    {actorInfo.biography ? <div><h3>Biography:</h3>{actorInfo.biography}</div> : ''}
                </div>
            </div>
        </div>
    )
}
export default ActorInfo