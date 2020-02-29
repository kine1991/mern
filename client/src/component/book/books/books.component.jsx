import React from 'react';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';

import { url } from '../../../config/environment';
import Filter from '../filter/filter.component';
import SingleBookCard from '../single-book-card/single-book-card.component';
import SingleBookCard2 from '../single-book-card2/single-book-card2.component';
import {
  BooksComponentContainer,
  BooksComponentLeft,
  BooksComponentRight,
  Title,
  Pagination,
  Button,
  ItemsContainer
} from './books.styles';

const BooksComponent = () => {
  const history = useHistory();
  const location = useLocation();
  const [books, setBooks] = React.useState([]);
  const [countAllBooks, setCountAllBooks] = React.useState(undefined);
  const [isPreviousButton, setIsPreviousButton] = React.useState(false);
  const [isNextButton, setIsNextButton] = React.useState(false);
  const [limit, setLimit] = React.useState(20);
  // const [paginationData, setPaginationData] = React.useState({
  //   countAllBooks: 0,
  //   page: 1,
  //   minPage: 1,
  //   maxPage: 1,
  //   limit: 20,
  //   isPreviousButton: false,
  //   isNextButton: false
  // });

  async function fetchData() {
    try {
      const count = await axios.get(`${url}/api/v1/books/count`);
      setCountAllBooks(count.data.countBooks);

      const query = new URLSearchParams(history.location.search);
      const queryPage = query.get('page');
      if (queryPage) {
        const dataFroDB = await axios.get(
          `${url}/api/v1/books?limit=20&page=${queryPage}`
        );
        setBooks(dataFroDB.data.data.books);
      } else {
        const dataFroDB = await axios.get(`${url}/api/v1/books?limit=20`);
        setBooks(dataFroDB.data.data.books);
      }
      // console.log('queryPage', queryPage);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  // React.useEffect(() => {
  //   console.log('&&', paginationData);
  // }, [setPaginationData]);

  React.useEffect(() => {
    fetchData();
    const query = new URLSearchParams(history.location.search);
    const currentPage = +query.get('page');
    const maxPage = Math.ceil(countAllBooks / limit);
    setIsPreviousButton(currentPage > 1);
    setIsNextButton(maxPage > currentPage);
  }, [history.location.search, countAllBooks]);

  const handlePreviousBtn = () => {
    const query = new URLSearchParams(history.location.search);
    const currentPage = +query.get('page');
    if (Number.isInteger(currentPage) && currentPage > 1) {
      query.set('page', currentPage - 1);
      history.replace({ ...history.location, search: query.toString() });
    }
  };

  const handleNextBtn = () => {
    const query = new URLSearchParams(history.location.search);
    const currentPage = +query.get('page');
    if (Number.isInteger(currentPage)) {
      query.set('page', currentPage + 1);
      history.replace({ ...history.location, search: query.toString() });
    }
  };

  return (
    <React.Fragment>
      <Title>Books</Title>
      <BooksComponentContainer>
        <BooksComponentLeft>
          <Filter />
        </BooksComponentLeft>
        <BooksComponentRight>
          <ItemsContainer>
            {books.map(book => (
              <SingleBookCard2 key={book.id} book={book} />
              // <SingleBookCard key={book.id} book={book} />
            ))}
          </ItemsContainer>
          {books.length ? (
            <Pagination>
              {isPreviousButton ? (
                <Button onClick={handlePreviousBtn}>previous</Button>
              ) : null}
              {isNextButton ? (
                <Button onClick={handleNextBtn}>next</Button>
              ) : null}
            </Pagination>
          ) : null}
        </BooksComponentRight>
      </BooksComponentContainer>
    </React.Fragment>
  );
};

export default BooksComponent;
