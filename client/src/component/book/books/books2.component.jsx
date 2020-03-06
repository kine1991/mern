import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Filter from '../filter/filter.component';
import Spinner from '../../../helper/component/spinner/spinner.component';
import SingleBookCard from '../single-book-card/single-book-card.component';
import { getBooksAsync, clearBooks } from '../../../redux/book/book.action';
import {
  BooksComponentContainer,
  BooksComponentLeft,
  BooksComponentRight,
  Title,
  Pagination,
  Button,
  ItemsContainer
} from './books.styles';

const Books2 = ({ books, getBooks, clearBooksAfterUnmount }) => {
  const history = useHistory();
  const [additionalParams, setAdditionalParams] = React.useState({
    limit: 20,
    page: 1,
    isPrevBtn: true,
    isNextBtn: true,
    countBooks: undefined
  });
  // React.useEffect(() => {
  //   fetchData();
  //   const query = new URLSearchParams(history.location.search);
  //   const currentPage = +query.get('page');
  //   const maxPage = Math.ceil(countAllBooks / limit);
  //   setIsPreviousButton(currentPage > 1);
  //   setIsNextButton(maxPage > currentPage);
  // }, [history.location.search, countAllBooks]);

  React.useEffect(() => {
    // getBooks();

    return () => {
      clearBooksAfterUnmount();
    };
  }, []);

  React.useEffect(() => {

    if (
      history.location.search === '?limit=20' ||
      history.location.search === ''
    ) {
      getBooks();
    } else {
      getBooks(history.location.search);
    }
  }, [history.location.search]);

  if (!books) {
    return <Spinner color="gray" />;
  }

  return (
    <React.Fragment>
      <Title
        onClick={() => setAdditionalParams({ ...additionalParams, limit: 30 })}
      >
        Books
      </Title>
      <BooksComponentContainer>
        <BooksComponentLeft>
          <Filter />
        </BooksComponentLeft>
        <BooksComponentRight>
          <ItemsContainer>
            {books.map(book => (
              <SingleBookCard key={book.id} book={book} />
            ))}
          </ItemsContainer>
        </BooksComponentRight>
      </BooksComponentContainer>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  books: state.book.books,
  isFetching: state.book.isFetching
});

const mapDispatchToProps = dispatch => ({
  getBooks: queryParams => dispatch(getBooksAsync(queryParams)),
  clearBooksAfterUnmount: () => dispatch(clearBooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Books2);
