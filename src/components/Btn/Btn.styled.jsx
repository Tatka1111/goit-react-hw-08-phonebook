import styled from 'styled-components';

export const BtnElement = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 24px;
  font-weight: bold;
  border: none;
  background-color: #984be1;
  box-shadow: 0px 12px 8px 4px #cab1b14d;
  transform: scale(1);
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: ${props =>
      props.status === 'add'
    ? 'rgba(20, 0, 255, 0.6)'
    : props.status === 'login' || props.status === 'update'
    ? 'rgba(0, 0, 255, 0.9)'
    : props.status === 'register' || props.status === 'edit'
        ? 'rgba(248, 220, 92, 0.7)'
        : props.status === 'goBack'
        ? 'rgba(150, 0, 99, 0.7)'
        : 'rgba(200, 80, 190, 0.6)'};
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
  }
  &:active {
    transform: scale(1.2);
  }
  & > svg {
    margin-right: 8px;
  }
  @media screen and (min-width: 768px) {
    padding: 8px 16px;
    font-size: 20px;
  }
`;