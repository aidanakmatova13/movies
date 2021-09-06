const ActorInfo = ({actorInfo}) =>{
    return(
        <div>
            <div className='grid'>
                <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${actorInfo.profile_path}`} alt=""/>
                <div>
                    <h2>{actorInfo.name}</h2>
                    {actorInfo.biography ? <div><h4>Biography:</h4>{actorInfo.biography}</div> : ''}
                </div>
            </div>
        </div>
    )
}
export default ActorInfo