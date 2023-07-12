const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    app.get("/api/product", ProductController.testProduct);
  // app.get('/api/', ProductController.getAllProduct);
  // app.post('/api/Product/new', ProductController.newProduct);
  // app.get('/api/Product/:id', ProductController.getOneProduct);
  // app.put('/api/:id/edit', ProductController.updateProduct);
  // app.delete('/api/Product/:id', ProductController.deleteProduct);
};
