import styled from 'styled-components';

export const AuthorCardContainer = styled.div`
  max-width: 760px;
  padding: 1rem;
  margin-bottom: 2rem;
  box-shadow: 4px 6px 10px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  cursor: pointer;
  transition: transform 0.6s;
  &:hover {
    transform: scale(1.01);
  }
  /* font-family: 'Roboto'; */
`;

export const ImageContainer = styled.div`
  flex: 1;
  @media (max-width: 992px) {
    flex: 2;
  }
  @media (max-width: 768px) {
    flex: 3;
  }
`;

export const ContentContainer = styled.div`
  flex: 5;
  margin-left: 2rem;
  @media (max-width: 992px) {
    flex: 7;
    margin-left: 1rem;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const AuthorName = styled.div`
  color: #5c5c5c;
  font-size: 20px;
  font-weight: 300;
`;

export const AuthorDate = styled.div`
  color: #999999;
  /* color: #9e866b; */
  font-size: 14px;
`;

export const AuthorAbout = styled.div`
  /* color: black; */
  color: #999999;
  font-size: 12px;
`;
