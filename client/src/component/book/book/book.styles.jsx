import styled from 'styled-components';

export const BookPageContainer = styled.div`
  max-width: 760px;
  margin: 0 auto;
`;

export const PublisherContainer = styled.div`
  display: flex;
  height: 100px;
  margin-bottom: 2rem;
`;

export const UserPhotoContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
`;
export const UserPhoto = styled.img`
  width: 100%;
  height: 100%;
`;

export const UserName = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  min-height: 20px;
`;

export const PublisherInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  height: 100px;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

export const BookContainer = styled.div`
  /* background-color: #dcdcdc; */
  margin-top: 2rem;
  display: flex;
  line-height: 3.6;
`;
export const BookImageContainer = styled.div`
  flex: 1;
`;

export const BookImage = styled.img`
  min-height: 200px;
  width: 100%;
`;
export const BookContent = styled.div`
  flex: 3;
  padding: 2rem;
`;

export const BookCreatedAt = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  text-align: right;
`;

export const BookTitle = styled.div`
  font-size: 38px;
  font-weight: 600;
  padding: 0;
  margin: 0 0 10px;
  line-height: 44px;
  text-align: left;
`;

export const BookAuthor = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

export const BookGenre = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

export const BookPage = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

export const BookDescription = styled.div`
  font-size: 16px;
  line-height: 1.6;
  font-weight: 300;
`;

export const Price = styled.span`
  font-size: 16px;
  line-height: 1.6;
  font-weight: 300;
  text-decoration: line-through;
  text-align: center;
  margin-right: 1rem;
`;

export const PriceDiscount = styled.span`
  font-size: 16px;
  line-height: 1.6;
  font-weight: 300;
  text-align: center;
  color: orangered;
`;

export const UnderlineHelper = styled.span`
  text-decoration: underline;
  font-weight: 600;
`;

export const LeftIcon = styled.span`
  margin-right: 1rem;
`;

export const TransitionTextHelper = styled.span`
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    color: #b28451;
  }
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

export const Button = styled.div`
  display: inline-block;
  background-color: #101d2c;
  color: #fff;
  border: none;
  border-radius: 0;
  /* font-family: 'Josefin Sans', sans-serif; */
  font-size: 1rem;
  text-transform: uppercase;
  /* padding: 0; */
  padding: 0.3rem 1.4rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #172a40;
  }
`;
