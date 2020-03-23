import React from 'react';
import styled from 'styled-components';
import Carousel from '@brainhubeu/react-carousel';
import { useHistory } from 'react-router-dom';
// import Slider from "react-slick";

import { BooksOfAuthorContainer, ItemContainer, ImageContainer, Image, Title, TitleBook } from './books-of-author.styles';
import '@brainhubeu/react-carousel/lib/style.css';


const BooksOfAuthor = ({ books }) => {
  const hisory = useHistory();

  if (!books.length) return null;

  return (
    <BooksOfAuthorContainer>
      <Title>Author's Books</Title>
      <Carousel slidesPerPage={4} arrows>
        {books.map(book => (
          <ItemContainer key={book._id} onClick={() => hisory.push(`/books/${book._id}`)}>
            <ImageContainer>
              <Image src={book.imageUrl} />
            </ImageContainer>
            <TitleBook>{book.name}</TitleBook>
          </ItemContainer>
        ))}
      </Carousel>
    </BooksOfAuthorContainer>
  );
};

export default BooksOfAuthor;
