import {Link} from "react-router-dom";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const MoviesList = ({movies}) =>{
        return (
            <div className='grid-2'>
                {
                    movies.map(el =>
                        <div className='box'>
                            <Link to={`/movie/${el.id}`} key={el.id}>
                                <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${el.poster_path}`} alt=""/>
                                <h3>{el.original_title}</h3>
                            </Link>
                        </div>
                    )
                }
            </div>
        )
    }
    export default MoviesList;