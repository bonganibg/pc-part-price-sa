const express = require('express');
const Category = require('../model/categoryModel');
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
    const category = {
        Name: req.body.Name,
        Products: req.body.Products
    }
    new Category(category).save();
    console.log(product);

    res.status(201).json({
        message: "Posted Successfully"
    });
});

router.get('', limitRequest,(req,res,next) =>{
    Category.find().then((documents) =>{
        res.json({
            message: 'Products recieved',
            category: documents
        });
    });
});

module.exports = router;