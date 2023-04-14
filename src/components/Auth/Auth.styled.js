import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  width: 50%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Divider = styled.div`
  width: 300px;
  display: flex;
  font-size: 12px;
  font-weight: 500;
  margin: 0 auto 27px;
  ::before,
  ::after {
    content: '';
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    flex: 1;
    height: 7px;
  }
  @media screen and (min-width: 1020px) {
    width: 350px;
  }
`;

export const Span = styled.span`
  text-align: center;
  flex: 0.2 0 auto;
`;

export const Btn = styled.button`
  background-color: #01b0c8;
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  padding: 15px 0 16px;
  width: 300px;
  border-radius: 5px;
  border-color: transparent;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: #004a4b;
  }
  & + & {
    margin-top: 11px;
  }
  @media screen and (min-width: 1020px) {
    width: 350px;
  }
`;
