/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';

import { Styles } from './single-book-card2.styles';

const SingleBookCard2 = ({ book }) => {
  // console.log(book.description.length);
  return (
    <Styles
      imageUrl={book.imageUrl}
      sizeOfName={book.name.length}
      sizeOfDescription={book.description.length}
    >
      <div className="card">
        <div className="card__picture" />
        <div className="card__content">
          <h4 className="title">{book.name}</h4>
          <h5 className="description">
            {book.description.slice(0, 152)}
            {book.description.length > 150 ? <span>...</span> : null}
          </h5>
        </div>
        <div className="card__footer">
          <div className="card__footer-left flex-center-center">
            {book.author}
          </div>
          <Link to={`/books/${book.id}`} className="card__footer-right flex-center-center">Open</Link>
        </div>
      </div>
    </Styles>
  );
};

export default SingleBookCard2;
