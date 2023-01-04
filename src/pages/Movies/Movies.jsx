import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { fetchMovieByName } from "components/API";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams(),
        [currentMovies, setCurrentMovies] = useState([]),
        location = useLocation();
    
    useEffect(() => {
        const afterReloadQuery = searchParams.get("query");
        if (afterReloadQuery === '' || afterReloadQuery === null) return;
        fetchMovieByName(afterReloadQuery).then(res => {
            setCurrentMovies([...res.results])
        })}, [searchParams])
    
    const onFormSubmit = (e) => {
        e.preventDefault();
        const searchedValue = e.target.elements.searchField.value;
        if (searchedValue === '') {
            return toast.error('Please, enter something in input field!')
        }
        fetchMovieByName(searchedValue).then(res => {
            setCurrentMovies([...res.results])
        })
        setSearchParams({query: searchedValue})
    }
    
    return <>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="searchField" defaultValue={searchParams.get("query") ?? ''}/>
            <button type="submit">Search</button>
        </form>
        <ul>
            {currentMovies ? currentMovies.map((movie) => {
                return <li key={movie.id}><Link to={`/movies/${movie.id}`} state={{ from: location }}>{ movie.title || movie.name }</Link></li>
            }): null}
        </ul>
        <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    </>
}

export default Movies;