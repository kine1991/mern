/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import queryString from 'query-string';

import { getFilterAsync } from '../../../redux/book/book.action';
import Checkbox from '../custom-checkbox/custom-checkbox.component';

export const FilterContainer = styled.div`
  padding: 1rem;
`;

const Filter = ({ filter, getFilter }) => {
  const history = useHistory();
  const [arrayOfFilter, setArrayOfFilter] = React.useState({
    genre: [],
    author: []
  });

  const clearFilter = () => {
    history.push('books');
  };
  const applyFilter = () => {
    const filterString = queryString.stringify(arrayOfFilter);
    history.push({
      pathname: '/books',
      search: `?${filterString}`
    });
  };

  React.useEffect(() => {
    console.log('@', history.location.search);
    console.log('@@', arrayOfFilter);
  }, [history.location.search]);

  React.useEffect(() => {
    console.log('##', arrayOfFilter);
  }, [arrayOfFilter]);

  React.useEffect(() => {
    // get data from db
    getFilter();

    // Turn query params into object (arrayOfFilter)
    const filterString = history.location.search.slice(1);
    const filterParsed = queryString.parse(filterString);
    console.log('(((', filterParsed);
    setArrayOfFilter({ ...arrayOfFilter, ...filterParsed });
  }, []);

  // Renreding
  if (!filter) {
    return null;
  }
  return (
    <FilterContainer>
      <h1>Filter</h1>
      <h3>Genge</h3>
      {filter.genre.map((value, index) => (
        <Checkbox
          key={value}
          value={value}
          checked={arrayOfFilter['genre'].includes(value)}
          category="genre"
          arrayOfFilter={arrayOfFilter}
          setArrayOfFilter={setArrayOfFilter}
          index={index}
        />
      ))}
      <h3>Author</h3>
      {filter.author.map((value, index) => (
        <Checkbox
          key={value}
          value={value}
          category="author"
          checked={arrayOfFilter['author'].includes(value)}
          arrayOfFilter={arrayOfFilter}
          setArrayOfFilter={setArrayOfFilter}
          index={index}
        />
      ))}
      <button type="button" onClick={applyFilter}>
        Apply
      </button>
      <button type="button" onClick={clearFilter}>
        Clear
      </button>
    </FilterContainer>
  );
};

const mapStateToProps = state => ({
  filter: state.book.filter
});

const mapDispatchToProps = dispatch => ({
  getFilter: () => dispatch(getFilterAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
