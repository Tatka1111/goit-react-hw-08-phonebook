import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 16px;
  transform: scale(1);
  box-shadow: none;
  height: fit-content;
  border: 1px solid transparent;
  &:hover,
  &:focus {
    /* transform: scale(1.1); */
    border: ${props =>
      props.status === 'login' || props.status === 'register'
        ? '1px solid transparent'
        : ' 1px solid rgba(0, 128, 75, 0.7)'};
    background-color: ${props =>
      props.status === 'add'
        ? 'rgba(20, 0, 255, 0.6)'
        : props.status === 'login'
        ? 'rgba(0, 0, 255, 0.9)'
        : props.status === 'register'
        ? 'rgba(248, 220, 92, 0.7)'
        : 'transparent'};
    box-shadow: ${props =>
      props.status === 'login' || props.status === 'register'
        ? '12px 12px 2px 1px rgba(0, 0, 255, .2);'
        : '12px 12px 2px 1px rgba(0, 0, 255, .2)'};
  }
  &.active {
    color: white;
    background-color: rgba(200, 80, 190, 0.6);
    &:hover,
    &:focus {
      border: none;
      color: inherit;
    }
  }
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    padding: 8px 16px;
    font-size: 20px;
  }
  @media screen and (min-width: 1280px) {
  }
`;