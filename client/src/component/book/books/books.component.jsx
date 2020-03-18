/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';

import Filter from '../filter/filter.component';
import Spinner from '../../../helper/component/spinner/spinner.component';
import SingleBookCard from '../single-book-card/single-book-card.component';
import SingleBookCardSimpleContainer from '../single-book-card-simple/single-book-card-simple.component';
import {
  getBooksAsync,
  clearBooks,
  getBooksCountAsync
} from '../../../redux/book/book.action';
import {
  BooksComponentContainer,
  BooksComponentLeft,
  BooksComponentRight,
  Title,
  Pagination,
  Button,
  ItemsContainerGrid,
  ItemsContainer,
  CurrentPage,
  ViewButtonContainer
} from './books.styles';

const BooksComponent = ({
  books,
  countBooks,
  filterParams,
  getBooks,
  clearBooksAfterUnmount,
  getBooksCount
}) => {
  const history = useHistory();
  const [btnState, setBtnState] = React.useState({
    disabledPrevBtn: true,
    disabledNextBtn: true
  });
  const [gridCard, setGridCard] = React.useState(true);

  React.useEffect(() => {
    if (countBooks !== undefined) {
      const limit = parseInt(filterParams.limit, 10);
      const page = parseInt(filterParams.page, 10);
      const maxPage = Math.ceil(countBooks / limit);
      // console.log('maxPage', maxPage);
      // console.log('limit', limit);
      // console.log('page', page);
      // console.log('countBooks', countBooks);
      setBtnState({
        ...btnState,
        disabledPrevBtn: page === 1,
        disabledNextBtn: maxPage <= page
      });
    }
  }, [history.location.search, countBooks]);

  React.useEffect(() => {
    // getBooks();
    // let initialFilterParams = queryString.stringify(filterParams);
    // // console.log('filterParams', filterParams);
    // // console.log('q', q);

    if (
      history.location.search === '?limit=20' ||
      history.location.search === '?page=20' ||
      history.location.search === '?' ||
      history.location.search === ''
    ) {
      history.push({
        pathname: '/books',
        search: `?limit=20&page=1`
      });
    }

    return () => {
      clearBooksAfterUnmount();
    };
  }, []);

  React.useEffect(() => {
    if (
      history.location.search === '?limit=20' ||
      history.location.search === ''
    ) {
      getBooksCount();
      getBooks();
    } else {
      getBooksCount(history.location.search);
      getBooks(history.location.search);
    }
  }, [history.location.search]);

  const handlePrevBtnClick = () => {
    const copyFilterParams = Object.assign({}, filterParams);
    const prevPage = parseInt(copyFilterParams.page, 10) - 1;
    copyFilterParams.page = prevPage;
    const filterString = queryString.stringify(copyFilterParams);
    history.push({
      pathname: '/books',
      search: `?${filterString}`
    });
  };

  const handleNextBtnClick = () => {
    const copyFilterParams = Object.assign({}, filterParams);
    const nextPage = parseInt(copyFilterParams.page, 10) + 1;
    copyFilterParams.page = nextPage;
    const filterString = queryString.stringify(copyFilterParams);
    history.push({
      pathname: '/books',
      search: `?${filterString}`
    });
  };

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
          <ViewButtonContainer>
            <button onClick={() => setGridCard(true)}>Grid Card</button>
            <button onClick={() => setGridCard(false)}>Simple Card</button>
          </ViewButtonContainer>
          {gridCard ? (
            <ItemsContainerGrid>
              {books.map(book => (
                <SingleBookCard key={book.id} book={book} />
              ))}
            </ItemsContainerGrid>
          ) : (
            <ItemsContainer>
              {books.map(book => (
                <SingleBookCardSimpleContainer key={book.id} book={book} />
              ))}
            </ItemsContainer>
          )}
          {/* <ItemsContainerGrid gridCard={gridCard}>
            {books.map(book => (
              <SingleBookCardSimpleContainer key={book.id} book={book} />
              // <SingleBookCard key={book.id} book={book} />
            ))}
          </ItemsContainerGrid> */}
          {countBooks === undefined ||
          countBooks <= filterParams.limit ? null : (
            <Pagination>
              <Button
                onClick={handlePrevBtnClick}
                disabled={btnState.disabledPrevBtn}
              >
                prev
              </Button>
              <CurrentPage>{filterParams.page}</CurrentPage>
              <Button
                onClick={handleNextBtnClick}
                disabled={btnState.disabledNextBtn}
              >
                next
              </Button>
            </Pagination>
          )}
        </BooksComponentRight>
      </BooksComponentContainer>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  books: state.book.books,
  countBooks: state.book.countBooks,
  filterParams: state.book.filterParams,
  isFetching: state.book.isFetching
});

const mapDispatchToProps = dispatch => ({
  getBooks: queryParams => dispatch(getBooksAsync(queryParams)),
  getBooksCount: queryParams => dispatch(getBooksCountAsync(queryParams)),
  clearBooksAfterUnmount: () => dispatch(clearBooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksComponent);
