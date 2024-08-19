const express = require('express');
const viewController = require('../controllers/viewController');

const router = express.Router();

const { getOverview, getTour } = viewController;

router.get('/', getOverview);

router.get('/tour/:slug', getTour);

module.exports = router;
