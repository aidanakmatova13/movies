import logo from '../components/Image/movie-time-cinema-logo-8B5BE91828-seeklogo.com.png'
import {Link, useHistory} from "react-router-dom";
import Loading from "../components/Loading";
import {useState} from "react";
import loop from './svg/free-icon-magnifying-glass-search-16492.svg';

const Header = () =>{
    const [isLoading, setIsLoading] = useState(false)
    const [search, setSearch] = useState('')
    const history = useHistory();
    const handleSearch = (e) =>{
        setSearch(e.target.value)
    }
    const btnSearch = () => {
        if (search.trim()) {
            history.push(`/search/${search}`)
            setSearch("")
        }
    }

    if (isLoading){
        return <Loading/>
    }
    return(
        <div className='header'>
            <div className='header-content container header-container'>
                <Link to={'/'}>
                    <img className='logo-img' src={logo} alt=""/>
                </Link>
                <div className='flex'><input value={search} onKeyDown={e => {if(e.key === "Enter") btnSearch()}} placeholder='search...' type="text" onChange={handleSearch}/>
                    <button className='search-btn' onClick={btnSearch}>
                        <img  src={loop} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Header;