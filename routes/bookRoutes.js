const express = require('express');
const bookController = require('../controllers/bookController');
const authController = require('../controllers/authController');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

// router.param('id', bookController.checkID);

router
  .route('/top-5-cheap')
  .get(bookController.topFiveCheapBook, bookController.getAllBooks);

router.route('/get-book-stats').get(bookController.getBookStats);
router
  .route('/get-book-stats-by-release-year/:year')
  .get(bookController.getBookStatsByReleaseYear);

router
  .route('/')
  .get(bookController.getAllBooks)
  .post(authController.protect, bookController.createBook);

router.route('/filter').get(bookController.getFilterDistinctValues);
router.route('/count').get(bookController.getCountBooks);
router
  .route('/get-books-by-publisher/:id')
  .get(bookController.getBooksByPublisher);

router
  .route('/:id')
  .get(bookController.getBook)
  .patch(bookController.updateBook)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'moderator'),
    bookController.deleteBook
  );

router
  .route('/:bookId/reviews')
  .get(reviewController.getAllReviewCurrentBook)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview
  );

module.exports = router;
