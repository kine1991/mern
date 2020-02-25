import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';

import { url } from '../../../config/environment';
import SingleBookCard from '../single-book-card/single-book-card.component';
import SingleBookCard2 from '../single-book-card2/single-book-card2.component';

const BooksComponentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const BooksComponentLeft = styled.div`
  flex-basis: 200px;
  background: #dcdcdc;
  margin-right: 2rem;
`;

const BooksComponentRight = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Button = styled.div`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: #dcdcdc;
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

const BooksComponent = () => {
  const history = useHistory();
  const location = useLocation();
  const [books, setBooks] = React.useState([]);
  console.log('location');
  console.log(location);

  const search = location.search; // could be '?foo=bar'
  const params = new URLSearchParams(search);
  const page = params.get('page'); // bar
  console.log(page);
  async function fetchData() {
    try {
      const dataFroDB = await axios.get(`${url}/api/v1/books?limit=20&page=2`);
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
    <React.Fragment>
      <Title>Books</Title>
      <BooksComponentContainer>
        <BooksComponentLeft>filter</BooksComponentLeft>
        <BooksComponentRight>
          <ItemsContainer>
            {books.map(book => (
              <SingleBookCard2 key={book.id} book={book} />
              // <SingleBookCard key={book.id} book={book} />
            ))}
          </ItemsContainer>
          <Pagination>
            <Button>previous</Button>
            <Button>next</Button>
          </Pagination>
        </BooksComponentRight>
      </BooksComponentContainer>
    </React.Fragment>
  );
};

export default BooksComponent;
