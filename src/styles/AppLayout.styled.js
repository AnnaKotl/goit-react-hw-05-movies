import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 6px 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 30px;
`;

export const NavigLink = styled(NavLink)`
  color: #a6a9f5;
  font-weight: 500;
  font-size: 20px;
  position: relative;
  transition: 0.3s ease;
    &:hover {
    color: #cacbeb;
    }
    &:focus {
    color: #cacbeb;
    outline: none;
    }
    &.active::after {
    content: ''; 
    position: absolute; 
    bottom: 0; 
    left: 0; 
    width: 100%; 
    height: 2px;
    background-color: #f5e1e8;
    }
    &.active {
    color: #f5e1e8;
    }

    &:hover::after,
    &:focus::after {
    transform: scaleX(1);
    }
`;