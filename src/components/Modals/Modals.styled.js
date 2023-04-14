import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 27px;
  align-items: center;
`;

export const Login = styled.h2`
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  color: #1a202c;
  margin-bottom: 24px;
  text-align: center;
`;

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1020px) {
    width: 350px;
  }
`;

export const Label = styled.label`
  line-height: 19px;
  color: #4a5568;
  margin-bottom: 11px;
  & > input {
    margin-top: 11px;
  }
`;

export const Input = styled.input`
  padding: 17px 0 17px 20px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  outline: none;
  font-size: 14px;
  line-height: 16px;
  color: #2d3748;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border: 1px solid #fca13a;
  }
  &:not(:placeholder-shown) {
    border: 1px solid #01b0c8;
  }
`;

export const Btn = styled.button`
  background-color: #fca13a;
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  padding: 15px 0 16px;
  border-radius: 5px;
  border-color: transparent;
  transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: #0c0b0b;
  }
`;

export const Toggle = styled.p`
  font-weight: 500;
  margin-top: 50px;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    color: #c23501;
  }
`;
