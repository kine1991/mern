/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { url } from '../../../config/environment';

export const FilterContainer = styled.div`
  padding: 1rem;
`;

const Filter = () => {
  const [filter, setFilter] = React.useState(null);

  async function fetchData() {
    try {
      const data = await axios.get(`${url}/api/v1/books/filter`);
      setFilter(data.data.filter);
      console.log('filter', data.data.filter);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);
  if (!filter) {
    return <h1>Loaf...</h1>;
  }
  return (
    <FilterContainer>
      <h1>Filter</h1>
      <h3>Genge</h3>
      {filter.genre.map(value => (
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value={value} id={value} />
          <label className="form-check-label" htmlFor={value}>{value}</label>
        </div>
      ))}
      <h3>Author</h3>
      {filter.author.map(value => (
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value={value} id={value} />
          <label className="form-check-label" htmlFor={value}>{value}</label>
        </div>
      ))}
      {filter.pages[0]}...{filter.pages[1]}
    </FilterContainer>
  );
};

export default Filter;
