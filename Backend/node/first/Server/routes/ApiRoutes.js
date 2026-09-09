const router = require("express").Router()

const categoryController = require("../apis/category/CategoryController")

router.post("/category/add",categoryController.Add)
router.post("/category/all",categoryController.All)
// router.post("/category/single",categoryController.single)
router.post("/category/getSingle",categoryController.getSingle)
router.post("/category/deleteCate",categoryController.deleteCate)


module.exports = router