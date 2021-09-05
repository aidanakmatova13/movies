import {Link} from "react-router-dom";
import man from "../../Image/avatar.jpg";

const Actors = (cast) =>{
    return (
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
    )
}
export default Actors