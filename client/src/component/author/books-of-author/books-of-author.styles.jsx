import styled from 'styled-components';

export const BooksOfAuthorContainer = styled.div`
  margin-top: 2rem;
  max-width: 760px;
  /* display: flex; */
`;
export const ItemContainer = styled.div`
  width: 130px;
  cursor: pointer;
  padding: 1rem;
  @media (max-width: 576px) {
    padding: 0.3rem;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
`;
export const Image = styled.img`
  width: 100%;
  height: 150px;
`;
export const Title = styled.div`
  color: #292b2c;
  font-size: 20px;
  font-weight: 200;
  margin-bottom: 1rem;
`;
export const TitleBook = styled.div`
  color: #292b2c;
  font-size: 12px;
  height: 20px;
  font-weight: 200;
`;
