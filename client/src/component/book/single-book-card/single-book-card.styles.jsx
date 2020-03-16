import styled from 'styled-components';

export const SingleBookCardContainer = styled.div``;

export const CardPicture = styled.div`
  flex: 4;
  /* background: url('https://i.insider.com/5d0bd4b7e3ecba5d97628a02?width=1136&format=jpeg'); */
  background: ${props => `url(${props.imageUrl}) no-repeat top center`};
  background-size: cover;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  margin-bottom: 1rem;
  position: relative;
`;

export const CartIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
  z-index: 100;
  opacity: 0;
  transition: all 0.3s ease;

  :hover {
    color: #b28451;
  }
`;
export const CardContent = styled.div`
  flex: 1;
  position: relative;
`;

export const Title = styled.div`
  position: absolute;
  top: -60px;
  right: 0;
  z-index: 10;
  padding: 0.8rem 1.2rem;
  padding: ${props => props.sizeOfName < 15 ? '0.8rem 1.2rem' : props.sizeOfName < 20 ? '0.6rem 1rem' : props.sizeOfName < 30 ? '0.5rem 0.9rem' : '0.4rem 1rem'};
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  background-image: linear-gradient(to right bottom, rgba(0, 0, 0, .65), rgba(0, 0, 0, .55));
  color: whitesmoke;
  margin: 0 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-size: ${props => props.sizeOfName < 15 ? '1.4rem' : props.sizeOfName < 20 ? '1.2rem' : props.sizeOfName < 30 ? '1rem' : '.8rem'};
`;

export const Author = styled.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 200;
`;

export const Price = styled.div`
  display: flex;
  justify-content: center;
`;

export const PriceOld = styled.div`
  text-align: center;
  text-decoration: line-through;
  font-weight: 300;
  font-size: 1rem;
  margin: 0.5rem;
`;

export const PriceDiscount = styled.div`
  text-align: center;
  font-weight: 100;
  font-size: 1rem;
  margin: 0.5rem;
`;

export const CardFooter = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  padding: 1rem;

  background: #f7f7f7;
  background-size: cover;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 30%, 100% 0, 100% 100%, 0% 100%);
  clip-path: polygon(0 30%, 100% 0, 100% 100%, 0% 100%);
`;

export const CardFooterLeft = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const Publisher = styled.span`
  font-size: 14px;
  letter-spacing: 0px;
  font-weight: 300;
  text-transform: uppercase;
  /* margin-left: 1rem;
  color: #808080; */
  :hover {
    color: #b28451;
    transition: all 0.3s ease;
  }
`;

export const CardFooterRight = styled.div`
  flex: 1;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;

  display: flex;
  justify-content: flex-end;
`;

export const CommentIcon = styled.div`
  color: #808080;
  :hover {
    color: #b28451;
    transition: all 0.3s ease;
  }
`;

export const HeartIcon = styled.div`
  margin-left: 1rem;
  color: #808080;
  :hover {
    color: #b28451;
    transition: all 0.3s ease;
  }
`;

export const Card = styled.div`
  height: 22rem;
  border-radius: 9px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;

  &:hover ${CardPicture} {
    filter: brightness(70%);
    /* -webkit-filter: grayscale(20%);
    -moz-filter: grayscale(20%); */
    transition: all 0.3s ease;
  }

  &:hover ${CartIcon} {
    opacity: 1;
  }
`;
