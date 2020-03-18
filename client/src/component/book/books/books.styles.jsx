import styled from 'styled-components';

export const BooksComponentContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const CurrentPage = styled.span`
  font-size: 10px;
  font-weight: 500;
  color: #b28451;
  display: flex;
  align-items: center;
  margin: 0 1rem;
  padding: 0.2rem 1rem;
  border-radius: 50%;
  background-color: #dcdcdc;
`;
export const BooksComponentLeft = styled.div`
  flex-basis: 200px;
  background: #f6f6f6;
  border-radius: 10px;
  /* background: #f7f7f7; */
  /* background: #dcdcdc; */
  margin-right: 2rem;

  @media (max-width: 576px) {
    margin-right: 0rem;
  }
`;

export const BooksComponentRight = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const Button = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: #dcdcdc;
  border: none;
  transition: all 0.5s;
  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(2px);
  }
  &:hover {
    background: #d4d4d4;
  }
`;

export const ItemsContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  @media (max-width: 1200px) {
    /* grid-gap: 2rem; */
    /* grid-template-columns: repeat(3, 1fr); */
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
  }
`;

export const ItemsContainer = styled.div``;

export const ViewButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;
