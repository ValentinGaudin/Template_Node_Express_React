const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/products', ProductController.getAllProducts);

module.exports = router;