const Product = require("../models/product.model");
module.exports.index = (request, response) => {response.json({message: "Hello World"});}

module.exports.testProduct = (req, res) => {
    res.json({
        msg: "This is the Sound Beam Ecomm project"
    })
};
module.exports.getAllProduct = (req, res) => {
    Product.find()
        .then(allProduct => {
            res.json({
                results: allProduct
            })
        })
        .catch(err => {
            res.json({
                msg: "ERROR!!!!",
                error: err
            })
        })
}
module.exports.newProduct = (req, res) => {
    //request.body represents the form information
    Product.create(req.body)
        .then(newProduct => {
            res.json({
                results: newProduct
            })
        })
        .catch(err => {
            res.json({
                msg: "That New New Aint It",
                error: err
            })
        })
}
module.exports.getOneProduct = (req, res) => {
    Product.findOne({
            _id: req.params.id
        })
        .then(oneProduct => {
            res.json({
                results: oneProduct
            })
        })
        .catch(err => {
            res.json({
                msg: "Something is a foot here",
                error: err
            })
        })
}
module.exports.updateProduct = (req, res) => {
    Product.updateOne({
                _id: req.params.id
            }, //which quote to update
            req.body, //gets the form information needed to update our Product
            {
                new: true,
                runValidators: true
            }
        )
        .then(updateProduct => {
            res.json({
                results: updateProduct
            })
        })
        .catch(err => {
            res.json({
                msg: "Something is a foot here",
                error: err
            })
        })
}
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({
            _id: req.params.id
        }) //which quote to delete
        .then(deleteProduct => {
            res.json({
                results: deleteProduct
            })
        })
        .catch(err => {
            res.json({
                msg: "Something is a foot here",
                error: err
            })
        })
}