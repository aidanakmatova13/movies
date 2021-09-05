import {Link} from "react-router-dom";

const Movies = ({movies}) =>{
    return (
        <div className='row'>
            {
                movies.map(el =>
                    <div key={el.id} className='col-3'>
                        <div className='box'>
                            <Link to={`/movie/${el.id}`} key={el.id}>
                                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt={el.title}/>
                                <h4>{el.original_title}</h4>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Movies