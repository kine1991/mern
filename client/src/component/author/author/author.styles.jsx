import styled from 'styled-components';

export const AuthorContainer = styled.div`
  max-width: 760px;
  margin: auto;
`;

export const AuthorConttent = styled.div`
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
  }
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
  /* transition: all 3s; */
  flex: 5;
  margin-left: 2rem;
  @media (max-width: 992px) {
    flex: 7;
    margin-left: 1rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  /* @media (max-width: 600px) {
    height: 200px;
  } */
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

export const AuthorAboutMoreOrLess = styled.span`
  /* color: black; */
  color: #5bc0de;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export const ButtonBack = styled.div`
  display: inline-block;
  margin-bottom: 2rem;
  color: #1a3049;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  .fa {
    color: #1a3049;
  }

  &:hover {
    color: black;
    .fa {
      color: black;
    }
  }
  &:hover .button-back-text {
    transition: all 0.6s;
    margin-left: 0.2rem;
  }
`;

export const LeftIcon = styled.span`
  margin-right: 1rem;
`;
