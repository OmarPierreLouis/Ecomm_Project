const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    app.get('/api', ProductController.testProduct);
    app.get('/api/product', ProductController.getAllProduct);
    app.get('/api/product/:id', ProductController.getOneProduct);
    app.post('/api/product/new', ProductController.newProduct);
    app.put("/api/:id/edit", ProductController.updateProduct);
    app.delete("/api/Product/:id", ProductController.deleteProduct);
};