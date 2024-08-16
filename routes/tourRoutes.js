const express = require('express');
const tourController = require('./../controllers/tourController');
const authController = require('../controllers/authController');
// const reviewController = require('../controllers/reviewController');
const reviewRouter = require('./../routes/reviewRoutes');

const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
} = tourController;

const { protect, restrictTo } = authController;

// const { createReview } = reviewController;

const router = express.Router();

router.use('/:tourId/reviews', reviewRouter);

// route for getting tour stats
router
  .route('/monthly-plan/:year')
  .get(protect, restrictTo('admin', 'lead-guide'), getMonthlyPlan);

// route for getting tour stats
router.route('/tour-stats').get(getTourStats);

// route to get the top 5 cheap tours
router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

// used to check if the route has an id
// if it does, it'll run the checkId function
// router.param('id', checkId);

router
  .route('/')
  .get(getAllTours)
  .post(protect, restrictTo('admin', 'lead-guide'), createTour);

router
  .route('/:id')
  .get(getTour)
  .patch(protect, restrictTo('admin', 'lead-guide'), updateTour)
  .delete(protect, restrictTo('admin', 'lead-guide'), deleteTour);

// router
//   .route('/:tourId/reviews')
//   .post(protect, restrictTo('user'), createReview);

module.exports = router;
