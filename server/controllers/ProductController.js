const express = require("express");
const HandleRequest = require("../src/service/HandleRequest.js");
const PrismaCli = require("../src/api/PrismaCli.js");

const prisma = PrismaCli.prisma

module.exports = {
    getAllProducts: HandleRequest.asyncHandleRequest(async (req, res, next) => {
        const getProducts = await prisma.product.findMany();
        console.log(getProducts);
        res.json(getProducts);
    }),
}

//     constructor() {
//         this.path = "/products";
//         this.router = (0, express.Router)();
//     }
//     fetchProduct() {
//         this.
//         this.getProduct = (req, res, next) => { };
//         this.createProduct = (req, res, next) => { };
//         this.deleteProduct = (req, res, next) => { };
//         this.updateProduct = (req, res, next) => { };
//         this.initializeRoutes();
//     }
//     initializeRoutes() {
//         this.router.get(this.path, this.getAllProducts);
//         this.router.get(`${this.path}/:ProductId`, this.getProduct);
//         this.router.post(this.path, this.createProduct);
//         this.router.delete(`${this.path}/:ProductId`, this.deleteProduct);
//         this.router.patch(`${this.path}/:ProductId`, this.updateProduct);
//     }
