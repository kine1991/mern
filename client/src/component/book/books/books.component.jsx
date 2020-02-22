import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { url } from '../../../config/environment';
import SingleBookCard from '../single-book-card/single-book-card.component';
import SingleBookCard2 from '../single-book-card2/single-book-card2.component';

const BooksComponentContainer = styled.div``;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  @media (max-width: 1200px) {
    /* grid-gap: 2rem; */
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0rem;
  }
`;

const BooksComponent = () => {
  const [books, setBooks] = React.useState([]);

  async function fetchData() {
    try {
      const dataFroDB = await axios.get(`${url}/api/v1/books`);
      // console.log(dataFroDB.data.data.books);
      setBooks(dataFroDB.data.data.books);
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <BooksComponentContainer>
      <Title>Books</Title>
      <ItemsContainer>
        {books.map(book => (
          <SingleBookCard2 key={book.id} book={book} />
          // <SingleBookCard key={book.id} book={book} />
        ))}
      </ItemsContainer>
    </BooksComponentContainer>
  );
};

export default BooksComponent;
