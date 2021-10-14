const express = require('express')
const product = require('../controller/product')
const auth = require('../middleware/auth')
const router = express.Router();

router.get('/api/v1/product',auth,product.getProduct);
router.get('/api/v1/product/:_id',auth,product.getProductById);
router.post('/api/v1/product',auth,product.postProduct);
router.put('/api/v1/product/:_id',auth,product.putProduct);
router.delete('/api/v1/product/:_id',auth,product.deleteProduct)

module.exports = router;