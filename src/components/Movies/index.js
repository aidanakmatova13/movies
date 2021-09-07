import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Movies = ({movies}) =>{
    return (
        <OwlCarousel className='owl-theme' items={7} margin={10} dots={false} key={movies.id}>
            {
                movies.filter(el => el.popularity > 2).map(el =>
                    <div className='box'>
                        <Link to={`/movie/${el.id}`} key={el.id}>
                            <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${el.poster_path}`} alt=""/>
                            <h3>{el.original_title}</h3>
                            <i><h3 className='character'>{el.character}</h3></i>
                        </Link>
                    </div>
                )
            }
        </OwlCarousel>
    )
}

export default Movies;