import {useEffect, useState} from "react";
import axios from "axios";
import Movies from "../components/Movies";
import Loading from "../components/Loading";

const Page = () => {
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/discover/movie?page=${page}&language='rus'&api_key=6f19f87e3380315b9573c4270bfc863c`)
            .then(({data}) => {
                setMovies(data.results)
                setIsLoading(false)
            })
    }, [page]) //required
    const handlePage = (num) => {
        setPage(num)
    }
    if (isLoading){
        return <Loading/>
    }
    return (
        <div className='container'>
            {
                Array(6).fill(0).map((el, idx) =>
                    <button className='btn' onClick={() => handlePage(idx+1)}>{idx+1}</button>
                )
            }
            <Movies movies={movies}/>
        </div>

    )
}
export default Page;