import { Outlet, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';

const Container = styled.main`
  gap: 12px;
  padding: 0 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const AppLayout = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
      <Toaster />
    </Container>
  );
};
