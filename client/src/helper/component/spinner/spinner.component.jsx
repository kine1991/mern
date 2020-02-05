import React from 'react';
import {
  SpinnerContainer,
  SpinnerHourglass,
  SpinnerRipple,
  SpinnerSp,
  SpinnerDualRing
} from './spinner.styles';
// import Spinner from 'react-bootstrap/Spinner';

const SpinnerComponent = ({ model, color }) => {
  if (model === 'Spinner1') {
    return (
      <SpinnerContainer>
        <SpinnerHourglass color={color} />
      </SpinnerContainer>
    );
  }
  if (model === 'Spinner2') {
    return (
      <SpinnerContainer>
        <SpinnerRipple color={color}>
          <div />
          <div />
        </SpinnerRipple>
      </SpinnerContainer>
    );
  }
  if (model === 'Spinner3') {
    return (
      <SpinnerContainer>
        <SpinnerSp color={color}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </SpinnerSp>
      </SpinnerContainer>
    );
  }
  if (model === 'Spinner4') {
    return (
      <SpinnerContainer>
        <SpinnerDualRing color={color} />
      </SpinnerContainer>
    );
  }
  if (model === 'Spinner5') {
    return (
      <SpinnerContainer>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </SpinnerContainer>
    );
  }
  return (
    <SpinnerContainer>
      <SpinnerDualRing color={color} />
    </SpinnerContainer>
  );
  // return (<SpinnerContainer><SpinnerRipple color={color}><div></div><div></div></SpinnerRipple></SpinnerContainer>)
  // return (<SpinnerContainer><SpinnerSp color={color}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></SpinnerSp></SpinnerContainer>)
};

export default SpinnerComponent;
