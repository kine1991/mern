import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { url } from '../../../config/environment';

export const BookPageContainer = styled.div`
  max-width: 760px;
  margin: 0 auto;
`;

export const PublisherContainer = styled.div`
  display: flex;
  /* justify-content: center;
  text-align: center; */
  /* flex: 1; */

  height: 100px;
  margin-bottom: 1rem;
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
  /* justify-content: center; */
  align-items: center;
  /* width: 100%; */
  flex: 1;
  height: 100px;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

export const BookContainer = styled.div`
  background-color: #dcdcdc;
`;

// https://i.ibb.co/VWnsKfS/user0.jpg

const BookComponent = () => {
  const [data, setData] = React.useState(null);
  const history = useHistory();
  const match = useRouteMatch();

  async function fetchData(id) {
    try {
      const book = await axios.get(`${url}/api/v1/books/${id}`);
      // console.log(book);
      if (book) {
        setData(book.data.data.book);
        // console.log(book.data.data.book);
      }
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    fetchData(match.params.id);
  }, []);

  React.useEffect(() => {
    console.log('###');
    console.log(data);
  }, [data]);

  if (!data) return <h1>Loading...</h1>;
  return (
    <BookPageContainer>
      <PublisherContainer>
        <UserPhotoContainer>
          {data.publisher.photo
          ?
            <UserPhoto src={data.publisher.photo} />
          :
            <UserPhoto src="https://i.ibb.co/VWnsKfS/user0.jpg" />
          }
        </UserPhotoContainer>
        <PublisherInfo>
          <div>
            <span>publisher: </span>
            <UserName>{data.publisher.name}</UserName>
          </div>
        </PublisherInfo>
      </PublisherContainer>
      <BookContainer>
        <h1>{data.name}</h1>
      </BookContainer>
    </BookPageContainer>
  );
};

export default BookComponent;
