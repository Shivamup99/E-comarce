const express = require('express')
const cart = require('../controller/cart')
const auth = require('../middleware/auth')
const router = express.Router();

router.get('/api/v1/cart',auth,cart.getCart);
router.get('/api/v1/cart/:_id',auth,cart.getCartById);
router.post('/api/v1/cart',auth,cart.postCart);
router.put('/api/v1/cart/:_id',auth,cart.putCart);
router.delete('/api/v1/cart/:_id',auth,cart.deleteCart)

module.exports = router;