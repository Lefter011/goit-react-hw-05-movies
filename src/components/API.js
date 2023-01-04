const API_KEY = 'a30d4841442794512b44207ca32f88ba';

const fetchPopularFilms = async () => {
    const fetchSearch = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
    return fetchSearch.json();
}

const fetchMovieByName = async (name) => {
    const findMovie = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${name}`);
    return findMovie.json();
}
const fetchCurrentFilm = async (id) => {
            const findCurrentFilm = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
            return findCurrentFilm.json();
}
const fetchReviews = async (id) => {
            const findReviews = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
            return findReviews.json();
}
const fetchCurrentCast = async (id) => {
            const findCurrentCast = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
            return findCurrentCast.json();
        }
export{fetchPopularFilms, fetchMovieByName, fetchCurrentFilm, fetchReviews, fetchCurrentCast}