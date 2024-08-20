const express = require('express');
const viewController = require('../controllers/viewController');

const router = express.Router();

const { getOverview, getTour, getLoginForm } = viewController;

router.get('/', getOverview);

router.get('/tour/:slug', getTour);

router.get('/login', getLoginForm);

module.exports = router;
