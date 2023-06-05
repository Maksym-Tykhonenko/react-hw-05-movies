
import { useEffect, useRef, Suspense } from "react";
import { useParams, useLocation, NavLink, Link, Outlet } from "react-router-dom";

import styled from 'styled-components';

const StyledLink = styled(NavLink)`
color: antiquewhite;

&.active{
    color: orangered;
}
`

const MovieDetails = () => {

    const {movieId} = useParams();
    //console.log(movieId);

    const location = useLocation()
    //console.log(location);
    const backLinkLocationRef = useRef(location.state?.from ?? '/list');
    //console.log(backLinkLocationRef);

    useEffect(() => {
        //запрос за одним фільмом
    })

    return (
        <>
            <Link to={backLinkLocationRef.current}>
                Back to colection
            </Link>

            <p>Details film {movieId}</p>

            <ul>
                <StyledLink to='cast'><li>Cast</li></StyledLink>
                <StyledLink to='reviews'><li>Reviews</li></StyledLink>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
    );
};

export default MovieDetails;