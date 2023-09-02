import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';
import Nav from './Nav';



const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 20px;
  max-width: 900px;
  margin: 0 auto;
`;

const Nav = () => {
  return (
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
  );
};

export const AppLayout = () => {
  return (
    <Container>
      <Nav />
      <hr />
      <Outlet />
      <Toaster />
    </Container>
  );
};
