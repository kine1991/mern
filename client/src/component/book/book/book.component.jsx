import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { url } from '../../../config/environment';
import {
  BookPageContainer,
  PublisherContainer,
  UserPhotoContainer,
  UserPhoto,
  PublisherInfo,
  BookContainer,
  BookImageContainer,
  BookImage,
  BookContent,
  BookCreatedAt,
  BookTitle,
  BookAuthor,
  BookGenre,
  BookPage,
  BookDescription,
  Price,
  PriceDiscount,
  UnderlineHelper,
  LeftIcon,
  TransitionTextHelper,
  ButtonBack,
  Button
} from './book.styles';

// https://i.ibb.co/VWnsKfS/user0.jpg

const BookComponent = () => {
  const [data, setData] = React.useState(null);
  const history = useHistory();
  const match = useRouteMatch();

  async function fetchData(id) {
    try {
      const book = await axios.get(`${url}/api/v1/books/${id}`);
      if (book) {
        setData(book.data.data.book);
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
      <ButtonBack onClick={() => history.push('/books')}>
        <LeftIcon>
          <i className="fa fa-arrow-left" />
        </LeftIcon>
        <span className="button-back-text">Back</span>
      </ButtonBack>
      <br />
      <PublisherContainer>
        <UserPhotoContainer>
          {data.publisher.photo ? (
            <UserPhoto src={data.publisher.photo} />
          ) : (
            <UserPhoto src="https://i.ibb.co/VWnsKfS/user0.jpg" />
          )}
        </UserPhotoContainer>
        <PublisherInfo>
          <div>
            <UnderlineHelper>publisher</UnderlineHelper>
            <span>: </span>
            <TransitionTextHelper>{data.publisher.name}</TransitionTextHelper>
          </div>
        </PublisherInfo>
      </PublisherContainer>
      <hr />
      <BookContainer>
        <BookImageContainer>
          {/* <BookImage src="https://cdn.book24.ru/v2/ITD000000001070688/COVER/cover3d1__w674.webp" /> */}
          <BookImage src="https://avatars.mds.yandex.net/get-zen_doc/16074/pub_5e42ff7f0c1c620fd8bd0895_5e4301c12e9e63535024e747/scale_1200" />
        </BookImageContainer>
        <BookContent>
          <BookCreatedAt>
            {moment(data.createdAt, 'YYYYMMDD').fromNow()}
          </BookCreatedAt>
          <BookTitle>{data.name}</BookTitle>
          <BookAuthor>
            <UnderlineHelper>Author</UnderlineHelper>
            <span>: </span>
            <TransitionTextHelper>{data.author}</TransitionTextHelper>
          </BookAuthor>
          <BookGenre>
            <UnderlineHelper>Genre</UnderlineHelper>
            <span>: </span>
            <TransitionTextHelper>{data.genre}</TransitionTextHelper>
          </BookGenre>
          <BookPage>
            <UnderlineHelper>Genre</UnderlineHelper>
            <span>: </span>
            <TransitionTextHelper>{data.pages}</TransitionTextHelper>
          </BookPage>
          <BookDescription>
            <UnderlineHelper>Description</UnderlineHelper>
            <span>: </span>
            {data.description}
          </BookDescription>
          <Price>
            Old Price
            <span>: </span>
            {data.price}
          </Price>
          <PriceDiscount>
            New Price
            <span>: </span>
            {data.priceDiscount}
          </PriceDiscount>
          <br />
          <Button>
            <LeftIcon>
              <i className="fa fa-shopping-cart" />
            </LeftIcon>
            <span>Add To Cart</span>
          </Button>
        </BookContent>
      </BookContainer>
    </BookPageContainer>
  );
};

export default BookComponent;
