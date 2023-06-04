import { useEffect, useState } from "react";
import { Link, useSearchParams } from 'react-router-dom';


const Movies = () => {
    const [movies] = useState([
        'Movie-name-1',
        'Movie-name-2',
        'Movie-name-3',
        'Movie-name-4',
        'Movie-name-5',
        'Movie-name-6',
        'Movie-name-7',
        'Movie-name-8',
        'Movie-name-9',
        'Movie-name-10',
        'Movie-name-11',
        'Movie-name-12',
        'Film-name-1',
        'Film-name-2',
        'Film-name-3',
        'Film-name-4',
        'Film-name-5',
        'Film-name-6',
        'Film-name-7',
        'Film-name-8',
        'Film-name-9',
        'Film-name-10',
        'Film-name-11',
        'Film-name-12',
    ]);
//, setMovies
    
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('query') ?? '';
    console.log(query);

   

    useEffect(() => {
        //запрос за колекцією фільмів
    }, []);

    const updQueryString = (e) => {

        const nextParams = e.target.value !== "" ? { query: e.target.value } : {};
        setSearchParams(nextParams);
    };

    const visibleFilms = movies.filter(m =>
        m.toLowerCase().includes(query.toLowerCase()));

    return (
        <>
            <input 
                value={query}
                type='text'
                onChange={updQueryString} />
            <ul>
                {visibleFilms.map(movie => {
                    return <Link to={`${movie}`} key={movie}>
                        <li>{movie}</li>
                    </Link>
                })}
            
            </ul>
        </ >
        
    );
};

export default Movies;