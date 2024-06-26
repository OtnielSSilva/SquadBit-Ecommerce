const express = require("express");
const router = express.Router();

//Controllers
const productsController = require("../controllers/productsController.js");
const homeController = require("../controllers/homeController.js");
const usersController = require("../controllers/usersController.js");

/* Route for HOME*/
router.get("/", homeController.get);

/* Route for Products*/
router.get("/meusProdutos", productsController.get);
router.post("/meusProdutos", productsController.create);
router.put("/meusProdutos/:id", productsController.update);
router.delete("/meusProdutos/:id", productsController.remove);

/* Route for Categories */
router.get("/categorias", productsController.getCategories);
router.get(
	"/meusProdutos/categorias/:category_id",
	productsController.getByCategory
);

/* Route for Product serch */
router.get("/meusProdutos/:name", productsController.getByName);

// Route for Users
router.post("/registro", usersController.create);
router.post("/login", usersController.login);

module.exports = router;
