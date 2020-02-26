import styled from 'styled-components';

export const BooksComponentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const BooksComponentLeft = styled.div`
  flex-basis: 200px;
  background: #dcdcdc;
  margin-right: 2rem;
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

export const Button = styled.div`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: #dcdcdc;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  @media (max-width: 1200px) {
    /* grid-gap: 2rem; */
    grid-template-columns: repeat(3, 1fr);
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
    grid-gap: 0rem;
  }
`;
