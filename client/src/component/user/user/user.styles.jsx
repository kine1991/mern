import styled from 'styled-components';

export const UserContainer = styled.div`
  margin: auto auto;
  max-width: 760px;
  min-height: 50vh;
`;

export const UserPhotoAndName = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 140px;
  /* background-color: green; */
`;

export const UserPhotoContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 2rem;
  margin-bottom: 1rem;
`;

export const UserPhoto = styled.img`
  width: 100%;
  height: 100%;
`;
export const UserSection = styled.div`
  display: flex;
  padding: 1rem;
  /* background-color: #f6f6f6; */
  margin-bottom: 1rem;
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
`;

export const Name = styled.div`
  font-size: 14px;
  transition: all 0.3s;
  &:hover {
    color: #b28451;
  }
  text-transform: uppercase;
  cursor: pointer;
`;

export const Email = styled.div`
  font-size: 12px;
`;

export const BooksSection = styled.div`
  /* font-size: 14px; */
`;

export const BookSection = styled.div`
  /* font-size: 14px; */
  background-color: #f6f6f6;
  margin-bottom: 2rem;
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
`;

export const BookImageContainer = styled.div`
  width: 160px;
  height: 160px;
  margin-right: 2rem;
`;
export const BookImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const BookTitle = styled.div`
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 400;
`;

export const BookAuthor = styled.div`
  font-size: 16px;
  color: gray;
`;
export const BookCreatedAt = styled.div`
  font-size: 8px;
  color: gray;
`;

export const OtherContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: start;
`;

export const OtherContainerChilren = styled.div`
  padding: 0.2rem;
`;

export const UnderlineHelper = styled.span`
  text-decoration: underline;
  font-weight: 400;
`;

export const BookInfo = styled.div`
  width: 100%;
`;

export const NameAndEmailContainer = styled.div``;

export const PropertyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PropertyContainerTop = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.8rem;
`;
export const PropertyContainerBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export const PropertyItem = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
`;

export const CountValue = styled.div`
  font-size: 24px;
  font-weight: 200;
  color: #548eaa;
`;

export const CountField = styled.div`
  font-size: 12px;
  color: gray;
`;

export const Badge = styled.span`
  font-size: 12px;
  color: black;
  background: #f6f6f6;
  display: inline;
  padding: 3px 7px;
  border-radius: 8px;
  margin: 0 0.6rem;
  margin-bottom: 1rem;
`;
