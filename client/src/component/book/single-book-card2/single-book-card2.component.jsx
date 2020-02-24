/* eslint-disable no-nested-ternary */
import React from 'react';
import { useHistory } from 'react-router-dom';

import { Styles } from './single-book-card2.styles';
// import Button from '../../button/button.component';

const SingleBookCard2 = ({ book }) => {
  let history = useHistory();

  const handleHeart = e => {
    e.stopPropagation();
    console.log('heart');
  };
  const handleComment = e => {
    e.stopPropagation();
    console.log('comment');
  };
  const handleOpen = () => {
    history.push(`/books/${book.id}`);
  };

  console.log(book);
  return (
    <Styles
      imageUrl={book.imageUrl}
      sizeOfName={book.name.length}
      sizeOfDesc6iion={book.description.length}
    >
      <div className="card" onClick={handleOpen}>
        <div className="card__picture">
          <div className="cart-icon">
            <i className="fa fa-heart" /> <span>2</span>
          </div>
        </div>
        <div className="card__content">
          <h4 className="title">{book.name}</h4>
          {/* <h5 className="description">
            {book.description.slice(0, 152)}
            {book.description.length > 150 ? <span>...</span> : null}
          </h5> */}
          <div className="author">{book.author}</div>
          <div className="price">
            <h4 className="price-old">{book.price} $</h4>
            <h2 className="price-discount">{book.priceDiscount} $</h2>
          </div>
        </div>
        {/* <Button>ggg</Button> */}
        <div className="card__footer">
          <div className="card__footer-left">
            <span className="publisher">{book.publisher.name}</span>
          </div>
          <div className="card__footer-right">
            <div className="comment-icon" onClick={handleComment}>
              <i className="fa fa-comment" /> <span>12</span>
            </div>
            <div className="heart-icon" onClick={handleHeart}>
              <i className="fa fa-heart" /> <span>12</span>
            </div>
            {/* <i className="fa fa-shopping-cart" /> */}
            {/* <Link to={`/books/${book.id}`} className="card__footer-right">Open</Link> */}
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default SingleBookCard2;
