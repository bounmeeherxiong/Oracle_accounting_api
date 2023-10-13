const router = require('express').Router();

const accountsController = require('../controllers/chartAccount.controller');
router.post('/Insert',accountsController.InsertChartAccount)
module.exports = router;