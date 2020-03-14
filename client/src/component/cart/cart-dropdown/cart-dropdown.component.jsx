import React from 'react';
import styled from 'styled-components';

const CartDropdownContainer = styled.div`
  position: absolute;
  right: 5px;
  top: 40px;

  border: 1px solid black;
  height: 300px;
  width: 200px;
`;

const CartDropdown = ({ setCartIsOpen }) => {
  const wrapperRef = React.useRef(null);

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setCartIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <CartDropdownContainer ref={wrapperRef}>
      <h5>CartDropdown</h5>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
