const express = require('express');
const Products = require('../model/productModel');
const router = express.Router();

const rateLimit = require('express-rate-limit');

const limitRequest = rateLimit({
    windowMs: 50000, // 1 minute (I think =D)
    max: 2, // 2 requests every 5 seconds
    message: {message: "Too many requests made to the api"},
    skipFailedRequests: true
});

router.post('',(req,res,next) =>
{
    const product = {
        Name: req.body.Name,
        Price: req.body.Price,
        Store: req.body.Store,
        Manufacturer: req.body.Manufacturer,
        Category: req.body.Category,
        Image: req.body.Image,
        additional: req.body.additional
    }
    new Products(product).save();
    console.log(product);

    res.status(201).json({
        message: "Posted Successfully"
    });
});

router.get('', limitRequest,(req,res,next) =>{
    Products.find().then((documents) =>{
        res.json({
            message: 'Products recieved',
            products: documents
        });
    });
});

module.exports = router;