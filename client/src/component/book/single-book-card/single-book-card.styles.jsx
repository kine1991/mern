import styled from 'styled-components';

export const Styles = styled.div`
  .card__img,
  .card__img--hover {
    background: ${props => `url(${props.imageUrl}) no-repeat top center`};
  }

  .card__like {
    width: 18px;
  }

  .card__clock {
    width: 15px;
    vertical-align: middle;
    fill: #ad7d52;
  }
  .card__time {
    font-size: 12px;
    color: #ad7d52;
    vertical-align: middle;
    margin-left: 5px;
  }

  .card__clock-info {
    float: right;
  }

  .card__img {
    visibility: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 235px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .card__info-hover {
    position: absolute;
    padding: 16px;
    width: 100%;
    opacity: 0;
    top: 0;
  }

  .card__img--hover {
    transition: 0.2s all ease-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    position: absolute;
    height: 235px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    top: 0;
  }
  .card {
    margin-right: 25px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
    background-color: #fff;
    width: 100%;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  }
  .card:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.02, 1.02);
  }

  .card__info {
    z-index: 2;
    background-color: #fff;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 16px 24px 24px 24px;
  }

  .card__category {
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #868686;
  }

  .card__title {
    margin-top: 5px;
    margin-bottom: 10px;
    font-family: 'Roboto Slab', serif;
  }

  .card__by {
    font-size: 12px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
  }

  .card__author {
    font-weight: 600;
    text-decoration: none;
    color: #ad7d52;
  }

  .card:hover .card__img--hover {
    height: 100%;
    opacity: 0.3;
  }

  .card:hover .card__info {
    background-color: transparent;
    position: relative;
  }

  .card:hover .card__info-hover {
    opacity: 1;
  }
`;