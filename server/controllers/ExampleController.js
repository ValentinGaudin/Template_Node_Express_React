const express = require("express");
const HandleRequest = require("../src/service/HandleRequest.js");


module.exports = {
    getExemple: HandleRequest.asyncHandleRequest(async (req, res, next) => {
        res.json({ Message: 'Hello from server' });
    })
}

