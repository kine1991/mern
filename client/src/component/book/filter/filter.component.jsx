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

  const clearFilter = () => {
    history.push('books');
  };
  const applyFilter = () => {
    const filterString = queryString.stringify(arrayOfFilter, {
      arrayFormat: 'comma'
    });
    history.push({
      pathname: '/books',
      search: `?${filterString}`
    });
  };

  // hook on change search (query params)
  React.useEffect(() => {
    // console.log('arrayOfFilter', arrayOfFilter);
  }, [history.location.search]);

  React.useEffect(() => {
    console.log('arrayOfFilter2', arrayOfFilter);
  }, [arrayOfFilter]);

  React.useEffect(() => {
    // get data from db
    fetchData();

    // Turn query params into object (arrayOfFilter)
    const filterString = history.location.search.slice(1);
    const filterParsed = queryString.parse(filterString);
    const newFilterParsed = {};
    Object.keys(filterParsed).forEach(field => {
      newFilterParsed[field] = filterParsed[field].split(',');
    });
    setArrayOfFilter({ ...arrayOfFilter, ...newFilterParsed });
  }, []);

  // Renreding
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
      <button type="button" onClick={clearFilter}>
        Clear
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
// if (filterParsed.genre === undefined && filterParsed.genre === undefined) {
//   setArrayOfFilter({ genre: [], author: [] });
// } else if () {
// } else if () {
// }
// const filterParsed = queryString.parse(filterString, {
//   arrayFormat: 'comma'
// });
// console.log('!!', newFilterParsed);
// {author: Array(2), genre: "Detective"}
// {author: "Vasily Grossman,The Enchanter", genre: "Detective"}
// console.log('filterString', filterString);
// console.log('filterParsed', filterParsed);
// console.log('!!!', queryString.parse('author=Vasily%20Grossman,The%20Enchanter&genre=Detective', {arrayFormat: 'comma'}));
// console.log('!!!2', queryString.parse('author=Vasily%20Grossman,The%20Enchanter&genre=Detective'));