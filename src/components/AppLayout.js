import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Nav, NavigLink } from 'styles/AppLayout.styled';

const AppLayout = () => {
  return (
    <Container>
      <header>
        <Nav>
          <NavigLink to="/">
            Home
          </NavigLink>
          <NavigLink to="/movies">
            Movies
          </NavigLink>
        </Nav>
         <hr />
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

    </Container>
  );
};

export default AppLayout;