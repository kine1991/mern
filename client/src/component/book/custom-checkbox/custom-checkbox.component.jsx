/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

export const Styles = styled.div``;

export const CustomCheckbox = ({
  index,
  value,
  category,
  checked,
  arrayOfFilter,
  setArrayOfFilter
}) => {
  const handleCheck = (e, value) => {
    if (e.target.checked) {
      setArrayOfFilter({
        ...arrayOfFilter,
        [category]: [...arrayOfFilter[category], value]
      });
    } else {
      setArrayOfFilter({
        ...arrayOfFilter,
        [category]: arrayOfFilter[category].filter(cur => {
          return cur !== value;
        })
      });
    }
  };

  return (
    <Styles>
      <div className="form-check">
        <input
          onChange={e => handleCheck(e, value)}
          // onChange={(e) => console.log(e.target.checked)}
          checked={checked}
          className="form-check-input"
          type="checkbox"
          value={value}
          id={index}
        />
        <label className="form-check-label" htmlFor={index}>
          {value}
        </label>
      </div>
    </Styles>
  );
};

export default CustomCheckbox;
// setArrayOfGenre(
//   arrayOfGenre.filter(cur => {
//     return cur !== value;
//   })
// );
