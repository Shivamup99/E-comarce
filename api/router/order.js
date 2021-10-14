const express = require('express')
const order = require('../controller/order')
const auth = require('../middleware/auth')
const router = express.Router();

router.get('/api/v1/order/income',auth,order.statsOrder)
router.get('/api/v1/order',auth,order.getOrder);
router.get('/api/v1/order/:_id',auth,order.getOrderById);
router.post('/api/v1/order',auth,order.postOrder);
router.put('/api/v1/order/:_id',auth,order.putOrder);
router.delete('/api/v1/order/:_id',auth,order.deleteOrder)

module.exports = router;