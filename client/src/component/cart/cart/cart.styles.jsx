import styled from 'styled-components';

export const CartContainer = styled.div`
  max-width: 760px;
  /* background-color: goldenrod; */
  margin: auto auto;
`;

export const Title = styled.div`
  font-size: 24px;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  display: flex;
  /* margin-bottom: 1rem; */
`;
export const ImageContainer = styled.div`
  /* display: flex; */
  flex: 1;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    flex: 3;
  }
`;

export const Image = styled.img`
  /* height: 100%; */
  width: 100%;
`;

export const MainBookInfo = styled.div`
  flex: 2;
  padding: 1rem;
  @media (max-width: 576px) {
    flex: 3;
  }
`;

export const OtherBookInfo = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 576px) {
    display: none;
  }
`;

// export const SpaceBookInfo = styled.div`
//   flex: 1;
//   padding: 1rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media (max-width: 576px) {
//     display: none;
//   }
// `;

export const BookTitle = styled.div`
  color: #5c5c5c;
  font-size: 16px;
`;

export const BookPrice = styled.span`
  color: #999999;
  font-size: 18px;
  text-decoration: line-through;
  margin-right: 1rem;
`;

export const BookGenre = styled.div`
  color: #5c5c5c;
  font-size: 12px;
`;

export const BookPriceDiscount = styled.span`
  color: black;
  font-size: 18px;
`;

export const BookAuthor = styled.div`
  color: #9e866b;
  font-size: 14px;
`;

export const BookQuantityContainer = styled.div`
  /* color: red; */
  font-weight: 300;
  font-size: 22px;
  margin: 1rem 0;

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

export const BookQuantity = styled.span`
  margin: 0 1rem;
`;

export const BookQuantityI = styled.i`
  color: #5c5c5c;
  font-weight: 900;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #9e866b;
  }
`;

export const RemoveIconI = styled.i`
  color: #5c5c5c;
  font-weight: 900;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #992e2e;
  }
`;

export const BookTotalPrice = styled.div`
  color: black;
  font-size: 22px;
  font-weight: 300;

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 32px;
  font-weight: 600;
`;

export const TotalPriceAndQuantitySmallDispaly = styled.div`
  display: none;
  @media (max-width: 576px) {
    display: block;
  }
`;

export const Spacer = styled.div``;

export const ButtonBack = styled.div`
  display: inline-block;
  margin-bottom: 2rem;
  color: #1a3049;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  .fa {
    color: #1a3049;
  }

  &:hover {
    color: black;
    .fa {
      color: black;
    }
  }
  &:hover .button-back-text {
    transition: all 0.6s;
    margin-left: 0.2rem;
  }
`;

export const LeftIcon = styled.span`
  margin-right: 1rem;
`;
