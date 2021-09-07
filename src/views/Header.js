import logo from '../Image/movie-time-cinema-logo-8B5BE91828-seeklogo.com.png'
import {Link} from "react-router-dom";
import Loading from "../components/Loading";
import {useState} from "react";

const Header = () =>{
    const [isLoading, setIsLoading] = useState(false)
    if (isLoading){
        return <Loading/>
    }
    return(
        <div className='header'>
            <div className='header-content header-container'>
                <Link to={'/'}>
                    <img className='logo-img' src={logo} alt=""/>
                </Link>
                <div className='search-content'>
                    <input type="text" placeholder='Search...'/>
                </div>
            </div>
        </div>
    )
}

export default Header;