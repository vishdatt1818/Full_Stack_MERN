const router = require("express").Router()

const categoryController = require("../apis/category/CategoryController")
const compayController = require("../apis/company/compayController")
const candidateController = require("../apis/candidate/candidateController")
const lostFoundController = require("../apis/LostFound/lostFoundController")

router.post("/category/add",categoryController.add)
router.post("/category/all",categoryController.all)
router.post("/category/getSingle",categoryController.getSingle)
router.post("/category/update",categoryController.update)
router.post("/category/deleteCate",categoryController.deletePermanent)
router.post("/category/softDelete",categoryController.softDelete)


router.post("/company/add",compayController.add)
router.post("/company/all",compayController.all)
router.post("/company/getSingle",compayController.getSingle)
router.post("/company/update",compayController.update)
router.post("/company/deleteCom",compayController.deletePermanent)
router.post("/company/softDelete",compayController.softDelete)



router.post("/candidate/add",candidateController.add)
router.post("/candidate/all",candidateController.all)
router.post("/candidate/getSingle",candidateController.getSingle)
router.post("/candidate/update",candidateController.update)
router.post("/candidate/deleteCan",candidateController.deletePermanent)
router.post("/candidate/softDelete",candidateController.softDelete)



router.post("/lost/add",lostFoundController.add)
router.post("/lost/all",lostFoundController.all)
router.post("/lost/single",lostFoundController.single)
router.post("/lost/update",lostFoundController.update)
router.post("/lost/deleteItem",lostFoundController.deleteItem)
// router.post("/lost/softDelete",lostFoundController.softDelete)


module.exports = router