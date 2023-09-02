import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  gap: 12px;
  padding: 0 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const List = styled.ul`
  display: flex;
  gap: 30px;
  padding: 20px 0;
`;

export const StyledLink = styled(Link)`
  color: #a6a9f5;
  font-weight: 500;
  font-size: 28px;
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