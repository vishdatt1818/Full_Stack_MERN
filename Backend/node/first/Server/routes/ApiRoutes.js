const router = require("express").Router()

const categoryController = require("../apis/category/CategoryController")

router.post("/category/add",categoryController.Add)
router.post("/category/all",categoryController.All)

module.exports = router