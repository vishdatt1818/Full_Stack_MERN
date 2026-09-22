const router = require("express").Router()


const categoryController = require("../apis/category/CategoryController")
const compayController = require("../apis/company/compayController")
const candidateController = require("../apis/candidate/candidateController")
const lostFoundController = require("../apis/LostFound/lostFoundController")
const userController = require("../apis/user/userController")
const auth = require("../middleware/auth")
const adminAuth = require("../middleware/adminAuth")

router.post("/user/add",userController.register)
router.post("/user/login",userController.login)

router.use(auth)
router.use(adminAuth)




router.post("/category/all",categoryController.all)
router.post("/category/getSingle",categoryController.getSingle)




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


router.post("/user/all",userController.all)
router.post("/user/single",userController.getSingle)
router.post("/user/update",userController.update)
router.post("/user/deleteItem",userController.deletePermanent)
router.post("/user/softDelete",userController.softDelete)



module.exports = router