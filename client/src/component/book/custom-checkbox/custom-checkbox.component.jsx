/* eslint-disable no-lonely-if */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

export const Styles = styled.div``;

export const CustomCheckbox = ({
  index,
  value,
  category,
  checked,
  filterParams,
  setFilterParams
}) => {
  const handleCheck = (e, value) => {
    if (e.target.checked) {
      if (typeof filterParams[category] === 'string') {
        setFilterParams({
          ...filterParams,
          [category]: [filterParams[category], value]
        });
      } else {
        setFilterParams({
          ...filterParams,
          [category]: [...filterParams[category], value]
        });
      }
    } else {
      if (typeof filterParams[category] === 'string') {
        setFilterParams({
          ...filterParams,
          [category]: []
        });
      } else {
        setFilterParams({
          ...filterParams,
          [category]: filterParams[category].filter(cur => {
            return cur !== value;
          })
        });
      }
    }
  };

  return (
    <Styles>
      <div className="form-check">
        <input
          onChange={e => handleCheck(e, value)}
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
    // <div>
    //   <FormControlLabel
    //     key={value}
    //     className="checkbox"
    //     style={{ marginTop: '-10px', fontSize: '12px' }}
    //     control={<Checkbox checked={checked} value={value} value={value} onChange={e => handleCheck(e, value)} color="primary" />}
    //     label={value}
    //   />
    // </div>
  );
};

export default CustomCheckbox;
