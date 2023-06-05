import { NavLink, Link, Outlet } from 'react-router-dom';
import { Suspense } from "react";
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
color: antiquewhite;

&.active{
    color: orangered;
}
`

const Layout = () => {
    return (
        <>
            <nav>
                <StyledLink to='/'>HOME   </StyledLink>
                <StyledLink to='/list'>LIST</StyledLink>
            </nav>

            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>

            <footer><Link>FOOTER</Link></footer>
        </>
    );
};

export default Layout;