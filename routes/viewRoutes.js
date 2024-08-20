const express = require('express');
const viewController = require('../controllers/viewController');
const authController = require('../controllers/authController');

const router = express.Router();

const { getOverview, getTour, getLoginForm } = viewController;

const { protect } = authController;

router.get('/', getOverview);

router.get('/tour/:slug', protect, getTour);

router.get('/login', getLoginForm);

module.exports = router;
