import {
    StyledTitle, StyledMovies
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectMovieList, selectMovieListStatus } from "../../features/moveList/movieListSlice";
import { selectGenreList, selectGenreListStatus } from "../../features/genreList/genreListSlice";
import { Error } from "../../core/status/Error";
import { Loading } from "../../core/status/Loading";
import { Outlet, useLocation } from "react-router-dom";
import { searchQueryParamName } from "../../features/useQueryParameter";
import { useEffect } from "react";
import { axiosSearchParamsMovie, selectSearchParamsMovieList } from "../../features/searchParams/searchParamsSlice";
import MovieTile from "./Tile";
import { NoResults } from "../../core/status/NoResults";

const getSearchMovie = (fetchMoviesSearch, loadingMoviesSearch, fetchMovieGenre, loadingGeners, searchParams) => {
    if (loadingMoviesSearch === "success" && loadingGeners === "success" && fetchMoviesSearch !== null) {
        const moviesList = fetchMoviesSearch.results;
        const genreList = fetchMovieGenre.genres;
        if (moviesList.length === 0) {
            return <NoResults query={searchParams}/>
        }
        return (
            <>
                <StyledMovies>
                    <StyledTitle>
                        Search results for "{searchParams}" ({moviesList.length})
                    </StyledTitle>
                    <MovieTile moviesList={moviesList} genreList={genreList} />
                </StyledMovies>
                <Outlet />
            </>
        )
    }

    return (
        loadingMoviesSearch === "loading" || loadingGeners === "loading" ?
            <Loading /> :
            loadingMoviesSearch === "error" || loadingGeners === "error" ?
                <Error /> :
                null
    )


}

const getPopularMovies = (fetchMovieData, fetchMovieGenre, loadingMovies, loadingGeners) => {
    if (loadingMovies === "success" && loadingGeners === "success") {
        const moviesList = fetchMovieData.results;
        const genreList = fetchMovieGenre.genres;

        return (
            <>
                <StyledMovies>
                    <StyledTitle>
                        Popular movies
                    </StyledTitle>
                    <MovieTile moviesList={moviesList} genreList={genreList} />
                </StyledMovies>
                <Outlet />
            </>
        )
    }
    else {
        return (
            loadingMovies === "loading" || loadingGeners === "loading" ?
                <Loading /> :
                loadingMovies === "error" || loadingGeners === "error" ?
                    <Error /> :
                    null
        )
    }
}

const Movies = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const fetchMovieData = useSelector(selectMovieList);
    const fetchMovieGenre = useSelector(selectGenreList);
    const fetchMoviesSearch = useSelector(selectSearchParamsMovieList);

    const loadingMoviesSearch = useSelector(selectMovieListStatus);
    const loadingGeners = useSelector(selectGenreListStatus);
    const loadingMovies = (useSelector(selectMovieListStatus));

    const searchParams = (new URLSearchParams(location.search)).get(searchQueryParamName);

    useEffect(() => {
        dispatch(axiosSearchParamsMovie(searchParams))

    }, [searchParams])

    return searchParams === null ? getPopularMovies(fetchMovieData, fetchMovieGenre, loadingMovies, loadingGeners) :
        getSearchMovie(fetchMoviesSearch, loadingMoviesSearch, fetchMovieGenre, loadingGeners, searchParams);

};

export default Movies;