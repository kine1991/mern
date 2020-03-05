import React from 'react';
import { connect } from 'react-redux';
// import { useHistory } from 'react-router-dom';

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
  React.useEffect(() => {
    getBooks();

    return () => {
      clearBooksAfterUnmount();
    };
  }, []);

  // React.useEffect(() => {
  //   console.log(books);
  // }, [books]);

  if (!books) {
    return <Spinner color="gray" />;
  }

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
  getBooks: filter => dispatch(getBooksAsync(filter)),
  clearBooksAfterUnmount: () => dispatch(clearBooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Books2);
