/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import queryString from 'query-string';

import { url } from '../../../config/environment';
import Checkbox from '../custom-checkbox/custom-checkbox.component';

export const FilterContainer = styled.div`
  padding: 1rem;
`;

const Filter = () => {
  const history = useHistory();
  const [filter, setFilter] = React.useState(null);
  const [arrayOfFilter, setArrayOfFilter] = React.useState({
    genre: [],
    author: []
  });

  async function fetchData() {
    try {
      const data = await axios.get(`${url}/api/v1/books/filter`);
      setFilter(data.data.filter);
      console.log('filter', data.data.filter);
    } catch (error) {
      console.log(error);
    }
  }

  const applyFilter = () => {
    const filterString = queryString.stringify(arrayOfFilter, {
      arrayFormat: 'comma'
    });
    history.push({
      pathname: '/books',
      search: `?${filterString}`
    });
  };

  React.useEffect(() => {
    console.log(arrayOfFilter);
  }, [arrayOfFilter]);

  React.useEffect(() => {
    fetchData();
    const filterString = history.location.search.slice(1);
    // console.log(filterString);
    const filterParsed = queryString.parse(filterString, {
      arrayFormat: 'comma'
    });
    setArrayOfFilter(filterParsed);
    console.log(filterParsed);
  }, []);
  if (!filter) {
    return <h1>Loading...</h1>;
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
    </FilterContainer>
  );
};

export default Filter;
// <div className="form-check">
//   <input className="form-check-input" type="checkbox" value={value} id={value} />
//   <label className="form-check-label" htmlFor={value}>{value}</label>
// </div>
// console.log(arrayOfFilter);
// console.log(filterString);
// const parsed = queryString.parse(stringifyed, { arrayFormat: 'comma' });
// console.log(parsed);
