import React from 'react';
import styled from 'styled-components';

export const Styles = styled.div`
  .btn {
    background-color: #55c57a;
    &,
    &:link,
    &:visited {
      text-transform: uppercase;
      text-decoration: none;
      padding: 0.5rem 1rem;
      display: inline-block;
      border-radius: 10rem;
      transition: all 0.2s;
      position: relative;
      font-size: $default-font-size;

      border: none;
      cursor: pointer;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 1rem 2rem rgba($color-black, 0.2);

      &::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
      }
    }

    &:active,
    &:focus {
      outline: none;
      transform: translateY(-1px);
      box-shadow: 0 0.5rem 1rem rgba($color-black, 0.2);
    }

    &--white {
      background-color: $color-white;
      color: $color-grey-dark;

      &::after {
        background-color: $color-white;
      }
    }

    &--green {
      background-color: $color-primary;
      color: $color-white;

      &::after {
        background-color: $color-primary;
      }
    }

    &::after {
      content: '';
      display: inline-block;
      height: 100%;
      width: 100%;
      border-radius: 10rem;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: all 0.4s;
    }

    &--animated {
      animation: moveInBottom 0.5s ease-out 0.75s;
      animation-fill-mode: backwards;
    }
  }

  .btn-text {
    &:link,
    &:visited {
      font-size: $default-font-size;
      color: $color-primary;
      display: inline-block;
      text-decoration: none;
      border-bottom: 1px solid $color-primary;
      padding: 3px;
      transition: all 0.2s;
    }

    &:hover {
      background-color: $color-primary;
      color: $color-white;
      box-shadow: 0 1rem 2rem rgba($color-black, 0.15);
      transform: translateY(-2px);
    }

    &:active {
      box-shadow: 0 0.5rem 1rem rgba($color-black, 0.15);
      transform: translateY(0);
    }
  }
`;

const Button = () => {
  return (
    <Styles>
      <button className="btn btn--green">Next step</button>
    </Styles>
  );
};

export default Button;
