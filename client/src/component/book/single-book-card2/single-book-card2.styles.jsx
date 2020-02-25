import styled from 'styled-components';

export const Styles = styled.div`
  .card {
    height: 22rem;
    border-radius: 9px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;

    &__picture {
      flex: 4;
      /* background: url('https://i.insider.com/5d0bd4b7e3ecba5d97628a02?width=1136&format=jpeg'); */
      background: ${props => `url(${props.imageUrl}) no-repeat top center`};
      background-size: cover;
      background-blend-mode: screen;
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
      clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
      margin-bottom: 1rem;
      position: relative;
    }
    &__content {
      flex: 1;
      position: relative;
    }
    &__footer {
      display: flex;
      flex: 1;
      align-items: flex-end;
      padding: 1rem;

      background: #dcdcdc;
      background-size: cover;
      background-blend-mode: screen;
      -webkit-clip-path: polygon(0 30%, 100% 0, 100% 100%, 0% 100%);
      clip-path: polygon(0 30%, 100% 0, 100% 100%, 0% 100%);

      &-left {
        flex: 1;
        overflow: hidden;

        /* display: flex;
        justify-content: flex-start; */
      }

      &-right {
        flex: 1;
        font-size: 14px;
        letter-spacing: 1px;
        font-weight: 300;

        display: flex;
        justify-content: flex-end;
      }
    }
  }
  .flex-center-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
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
  }

  .author {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 200;
  }

  .description {
    padding: 0.5rem;
    font-size: 0.8rem;
    font-weight: 300;
    color: #dcdcdc;
    font-size: ${props => props.sizeOfDescription < 60 ? '1.4rem' : props.sizeOfDescription < 80 ? '1.2rem' : props.sizeOfDescription < 120 ? '1rem' : '0.8rem'}
  }
  .price-discount {
    text-align: center;
    font-weight: 100;
    font-size: 1rem;
    margin: 0.5rem;
  }
  .price-old {
    text-align: center;
    text-decoration: line-through;
    font-weight: 300;
    font-size: 1rem;
    margin: 0.5rem;
  }
  .price {
    display: flex;
    justify-content: center;
  }

  .comment-icon {
    /* fill: #808080; */
    color: #808080;
    :hover {
      color: #b28451;
      transition: all 0.3s ease;
    }
  }

  .heart-icon {
    margin-left: 1rem;
    color: #808080;
    :hover {
      color: #B28451;
      transition: all 0.3s ease;
    }
  }
  .publisher {
    font-size: 14px;
    letter-spacing: 0px;
    font-weight: 300;
    text-transform: uppercase;
    /* margin-left: 1rem;
    color: #808080; */
    :hover {
      color: #B28451;
      transition: all 0.3s ease;
    }
  }

  .cart-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    color: whitesmoke;
    z-index: 100;
    opacity: 0;
    transition: all 0.3s ease;

    :hover {
      color: #b28451;
    }
  }

  .card:hover .card__picture {
    filter: brightness(90%);
    /* -webkit-filter: grayscale(20%);
    -moz-filter: grayscale(20%); */
  transition: all 0.3s ease;
  }

  .card:hover .cart-icon {
    opacity: 1;
  }
`;
