import React from 'react';
import styled from 'styled-components';

export const Styles = styled.div`
  .card {
    height: 22rem;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to right bottom, #bdc3c7, whitesmoke);

    font-family: 'Roboto', sans-serif;

    /* background-color: #6699cc; */
    /* #bdc3c7 → #2c3e50 */

    /* background-size: cover;
    height: 23rem;
    background-blend-mode: screen;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%); */

    &__picture {
      flex: 3;
      background: url('https://i.insider.com/5d0bd4b7e3ecba5d97628a02?width=1136&format=jpeg');
      /* background: ${props => `url(${props.imageUrl}) no-repeat top center`}; */
      background-size: cover;
      background-blend-mode: screen;
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
      clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
      /* background-size: contain; */
      /* background-size: auto; */
      
    }
    &__content {
      flex: 2;
      position: relative;

    }
    /* &__header {
      flex: 1;
    } */
    &__footer {
      flex: 1;
    }
  }
  .title {
    position: absolute;
    top: -60px;
    right: 0;
    z-index: 10;
    padding: 1rem 1.5rem;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    /* background-image: linear-gradient(to right bottom, black, whitesmoke); */
    /* background-image: linear-gradient(217deg, rgba(255,255,255,.8), rgba(255,255,255,0)); */
    background-image: linear-gradient(to right bottom, rgba(44, 62, 80, .85), rgba(189, 195, 199, .85));
    color: whitesmoke;
    margin: 0 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    font-size: ${props =>
      // eslint-disable-next-line no-nested-ternary
      props.sizeOfName < 20
        ? '1.4rem'
        : props.sizeOfName < 30
        ? '1.2rem'
        : '1rem'};
  }

  .description{
    padding: .5rem;
    font-size: 1rem;
    font-weight: 100;
    color: black;
  }
`;

const SingleBookCard2 = ({ book }) => {
  console.log(book.name.length);
  return (
    <Styles imageUrl={book.imageUrl} sizeOfName={book.name.length}>
      <div className="card">
        <div className="card__picture"></div>
        {/* <div className="card__header">
          <h1>header</h1>
        </div> */}
        <div className="card__content">
          <h4 className="title">{book.name}</h4>
          <h5 className="description">{book.description}</h5>
        </div>
      </div>
    </Styles>
  );
};

export default SingleBookCard2;
