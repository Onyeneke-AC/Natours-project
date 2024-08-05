const express = require('express');
const tourController = require('./../controllers/tourController');

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

const router = express.Router();

// route for getting tour stats
router.route('/monthly-plan/:year').get(getMonthlyPlan);

// route for getting tour stats
router.route('/tour-stats').get(getTourStats);

// route to get the top 5 cheap tours
router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

// used to check if the route has an id
// if it does, it'll run the checkId function
// router.param('id', checkId);

router.route('/').get(getAllTours).post(createTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
