const express = require('express');
const viewController = require('../controllers/viewController');
const authController = require('../controllers/authController');

const router = express.Router();

const { getOverview, getTour, getLoginForm } = viewController;

const { isLoggedIn } = authController;

router.use(isLoggedIn);
router.get('/login', getLoginForm);

router.get('/', getOverview);

router.get('/tour/:slug', getTour);

module.exports = router;
