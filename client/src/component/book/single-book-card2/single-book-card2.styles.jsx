import styled from 'styled-components';

export const Styles = styled.div`
  .card {
    height: 22rem;
    /* border: 1px solid black; */
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to right bottom, #bdc3c7, whitesmoke);
    font-family: 'Roboto', sans-serif;

    &__picture {
      flex: 3;
      background: url('https://i.insider.com/5d0bd4b7e3ecba5d97628a02?width=1136&format=jpeg');
      /* background: ${props =>
        `url(${props.imageUrl}) no-repeat top center`}; */
      background-size: cover;
      background-blend-mode: screen;
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
      clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
      margin-bottom: 1rem;
      
    }
    &__content {
      flex: 1;
      position: relative;
    }
    &__footer {
      display: flex;
      padding: .4rem;

      &-left {
        flex: 1;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: 300;
        /* color: #c69963; */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      &-right {
        flex: 1;
        font-size: 14px;
        letter-spacing: 1px;
        font-weight: 300;
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
    padding: ${props =>
      props.sizeOfName < 15 ? '0.8rem 1.2rem' : props.sizeOfName < 20 ? '0.6rem 1rem' : props.sizeOfName < 30 ? '0.5rem 0.9rem' : '0.4rem 1rem'};
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    background-image: linear-gradient(to right bottom, rgba(0, 0, 0, .65), rgba(0, 0, 0, .55));
    color: whitesmoke;
    margin: 0 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    font-size: ${props =>
      props.sizeOfName < 15 ? '1.4rem' : props.sizeOfName < 20 ? '1.2rem' : props.sizeOfName < 30 ? '1rem' : '.8rem'};
  }

  .description{
    padding: .5rem;
    font-size: .8rem;
    font-weight: 300;
    color: black;
    font-size: ${props =>
      props.sizeOfDescription < 60 ? '1.4rem' : props.sizeOfDescription < 80 ? '1.2rem' : props.sizeOfDescription < 120 ? '1rem' : '0.8rem'}
    }
`;