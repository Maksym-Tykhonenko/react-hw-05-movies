import { NavLink, Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
color: black;

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
                <Outlet />
            </main>

            <footer><Link>FOOTER</Link></footer>
        </>
    );
};

export default Layout;