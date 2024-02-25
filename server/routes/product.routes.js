const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    app.get('/sb', ProductController.testProduct);
    app.get('/sb/headphones', ProductController.getAllProduct); /* Order Page */
    app.post('/sb/member/account', ProductController.newProduct);/*Account Page */
    app.post('/sb/member/address', ProductController.newProduct);/*Address Page */
    app.post('/sb/member/wallet', ProductController.newProduct);/*Wallet Page */
    app.put('/sb/cart', ProductController.updateProduct);/*Show Cart page */
    // app.delete('/sb/remove/:id', ProductController.deleteProduct);
    // app.get('/sb/headphones/:id', ProductController.getOneProduct); 
    // This will be for the single product images under the main image on the order page
    // app.put("/sb/edit/:id", ProductController.updateProduct);
};