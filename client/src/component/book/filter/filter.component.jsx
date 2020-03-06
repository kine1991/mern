/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import queryString from 'query-string';

import {
  getFilterAsync,
  setParamsForFilter
} from '../../../redux/book/book.action';
import Checkbox from '../custom-checkbox/custom-checkbox.component';

export const FilterContainer = styled.div`
  padding: 1rem;
`;

const Filter = ({
  filterParams,
  filter,
  limit,
  setFilterParams,
  getFilter
}) => {
  const history = useHistory();

  const clearFilter = () => {
    history.push('books');
  };

  const applyFilter = () => {
    const filterString = queryString.stringify(filterParams);
    history.push({
      pathname: '/books',
      search: `?${filterString}`
    });
  };

  React.useEffect(() => {
    // get data from db
    getFilter();

    // Turn query params into object (filterParams)
    const filterString = history.location.search.slice(1);
    const filterParsed = queryString.parse(filterString);
    // console.log('filterParams', filterParams);

    setFilterParams({ ...filterParams, ...filterParsed });
    // applyFilter();
  }, [history.location.search]);

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
          checked={filterParams['genre'].includes(value)}
          category="genre"
          filterParams={filterParams}
          setFilterParams={setFilterParams}
          index={index}
        />
      ))}
      <h3>Author</h3>
      {filter.author.map((value, index) => (
        <Checkbox
          key={value}
          value={value}
          category="author"
          checked={filterParams['author'].includes(value)}
          filterParams={filterParams}
          setFilterParams={setFilterParams}
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
  filter: state.book.filter,
  filterParams: state.book.paramsForFilter
});

const mapDispatchToProps = dispatch => ({
  getFilter: () => dispatch(getFilterAsync()),
  setFilterParams: params => dispatch(setParamsForFilter(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

// /* eslint-disable jsx-a11y/label-has-associated-control */
// import React from 'react';
// import { connect } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import styled from 'styled-components';
// import queryString from 'query-string';

// import { getFilterAsync } from '../../../redux/book/book.action';
// import Checkbox from '../custom-checkbox/custom-checkbox.component';

// export const FilterContainer = styled.div`
//   padding: 1rem;
// `;

// const Filter = ({ filter, limit, getFilter }) => {
//   // function for find current and previous value
//   const usePrevious = value => {
//     const ref = React.useRef();
//     React.useEffect(() => {
//       ref.current = value;
//     });
//     return ref.current;
//   };

//   const history = useHistory();
//   const [arrayOfFilter, setArrayOfFilter] = React.useState({
//     genre: [],
//     author: [],
//     limit: 20
//   });
//   const [lim, setLim] = React.useState(null);
//   const prevLimit = usePrevious(limit);

//   React.useEffect(() => {
//     if (limit !== prevLimit) {
//       setArrayOfFilter({ ...arrayOfFilter, limit });
//       console.log('arrayOfFilter', arrayOfFilter);
//       const filterString = queryString.stringify(arrayOfFilter);
//       // history.push({
//       //   pathname: '/books',
//       //   search: `?${filterString}`
//       // });
//     }
//   }, [arrayOfFilter]);
//   if (limit !== prevLimit) {
//     console.log('add limit to history', limit);
//     // const filterString = queryString.stringify(arrayOfFilter);
//     // setArrayOfFilter({ ...arrayOfFilter, limit: 21 });
//     // setArrayOfFilter({ limit: 21 });
//     // const filterString = history.location.search.slice(1);
//     // const filterParsed = queryString.parse(filterString);
//     // setArrayOfFilter({ ...arrayOfFilter, ...filterParsed });

//     // history.push({
//     //   pathname: '/books',
//     //   search: `${history.location.search}?limit=${limit}`
//     // });
//   }

//   const clearFilter = () => {
//     history.push('books');
//   };
//   const applyFilter = () => {
//     const filterString = queryString.stringify(arrayOfFilter);
//     history.push({
//       pathname: '/books',
//       search: `?${filterString}`
//     });
//   };

//   React.useEffect(() => {
//     // get data from db
//     getFilter();

//     // Turn query params into object (arrayOfFilter)
//     const filterString = history.location.search.slice(1);
//     const filterParsed = queryString.parse(filterString);
//     setArrayOfFilter({ ...arrayOfFilter, ...filterParsed });
//     // applyFilter();
//   }, []);

//   // Renreding
//   if (!filter) {
//     return null;
//   }
//   return (
//     <FilterContainer>
//       <h1>Filter</h1>
//       <h3>Genge</h3>
//       {filter.genre.map((value, index) => (
//         <Checkbox
//           key={value}
//           value={value}
//           checked={arrayOfFilter['genre'].includes(value)}
//           category="genre"
//           arrayOfFilter={arrayOfFilter}
//           setArrayOfFilter={setArrayOfFilter}
//           index={index}
//         />
//       ))}
//       <h3>Author</h3>
//       {filter.author.map((value, index) => (
//         <Checkbox
//           key={value}
//           value={value}
//           category="author"
//           checked={arrayOfFilter['author'].includes(value)}
//           arrayOfFilter={arrayOfFilter}
//           setArrayOfFilter={setArrayOfFilter}
//           index={index}
//         />
//       ))}
//       <button type="button" onClick={applyFilter}>
//         Apply
//       </button>
//       <button type="button" onClick={clearFilter}>
//         Clear
//       </button>
//     </FilterContainer>
//   );
// };

// const mapStateToProps = state => ({
//   filter: state.book.filter
// });

// const mapDispatchToProps = dispatch => ({
//   getFilter: () => dispatch(getFilterAsync())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
