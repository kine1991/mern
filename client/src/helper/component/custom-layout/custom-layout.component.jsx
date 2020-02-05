import React from 'react';
import { Container } from './custom-layout.styles';

const CustomLayoutComponent = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CustomLayoutComponent;
