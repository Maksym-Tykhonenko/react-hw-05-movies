import { useEffect } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
color: black;

&.active{
    color: orangered;
}
`

const MovieDetails = () => {

    const {movieId} = useParams();
    //console.log(movieId);



    useEffect(() => {
        //запрос за одним фільмом
    })

    return (
        <>
            <button type="button">back</button>

            <p>Details film {movieId}</p>

            <ul>
                <StyledLink to='cast'><li>Cast</li></StyledLink>
                <StyledLink to='reviews'><li>Reviews</li></StyledLink>
            </ul>
            <Outlet/>
        </>
    )
};

export default MovieDetails;