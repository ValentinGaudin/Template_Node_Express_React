const express = require("express");
const router = express.Router();
const ExampleController = require("../controllers/ExampleController");


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/example', ExampleController.getExemple);

module.exports = router;