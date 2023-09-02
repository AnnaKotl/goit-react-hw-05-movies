import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Container, List, StyledLink } from 'styles/AppLayout.styled';

export const AppLayout = () => {
  const location = useLocation();

  return (
    <Container>
      <nav>
        <List>
          <li>
            <StyledLink to="/" className={location.pathname === '/' ? 'active' : ''}>Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies" className={location.pathname === '/movies' ? 'active' : ''}>Movies</StyledLink>
          </li>
        </List>
      </nav>
      <hr />
      <Outlet />
      <Toaster />
    </Container>
  );
};
