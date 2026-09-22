const adminRoute = require("express").Router()
const multer  = require('multer')
const path = require("path")

const categoryController = require("../apis/category/CategoryController")
const compayController = require("../apis/company/compayController")
const candidateController = require("../apis/candidate/candidateController")
const lostFoundController = require("../apis/LostFound/lostFoundController")
const userController = require("../apis/user/userController")
const auth = require("../middleware/auth")
const adminAuth = require("../middleware/adminAuth")

adminRoute.post("/user/add",userController.register)
adminRoute.post("/user/login",userController.login)

adminRoute.use(auth)
adminRoute.use(adminAuth)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
     cb(null, path.join(__dirname, "../public/category"));
  },
  filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())

  }
})

const upload = multer({ storage: storage })

adminRoute.post("/category/all",categoryController.all)
adminRoute.post("/category/getSingle",categoryController.getSingle)
adminRoute.post("/category/add", upload.single("image"), categoryController.add)





adminRoute.post("/candidate/add",candidateController.add)
adminRoute.post("/candidate/all",candidateController.all)
adminRoute.post("/candidate/getSingle",candidateController.getSingle)
adminRoute.post("/candidate/update",candidateController.update)
adminRoute.post("/candidate/deleteCan",candidateController.deletePermanent)
adminRoute.post("/candidate/softDelete",candidateController.softDelete)



adminRoute.post("/lost/add",lostFoundController.add)
adminRoute.post("/lost/all",lostFoundController.all)
adminRoute.post("/lost/single",lostFoundController.single)
adminRoute.post("/lost/update",lostFoundController.update)
adminRoute.post("/lost/deleteItem",lostFoundController.deleteItem)
// adminRoute.post("/lost/softDelete",lostFoundController.softDelete)


adminRoute.post("/user/all",userController.all)
adminRoute.post("/user/single",userController.getSingle)
adminRoute.post("/user/update",userController.update)
adminRoute.post("/user/deleteItem",userController.deletePermanent)
adminRoute.post("/user/softDelete",userController.softDelete)



module.exports = adminRoute