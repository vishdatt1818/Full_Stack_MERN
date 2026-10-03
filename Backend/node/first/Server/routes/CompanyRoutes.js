const companyRouter = require("express").Router()
const multer  = require('multer')
const path = require("path")

const jobCategoryController = require("../apis/jobCategory/jobCategoryController")
const jobController = require("../apis/job/jobController")
const compayController = require("../apis/company/compayController")
const adminAuth = require("../middleware/adminAuth")
const auth = require("../middleware/auth")

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

companyRouter.post("/company/add",compayController.add)
companyRouter.post("/company/jobadd",jobController.add)

companyRouter.use(auth)
// companyRouter.use(adminAuth)

companyRouter.post("/company/all",compayController.all)
companyRouter.post("/company/getSingle",compayController.getSingle)
companyRouter.post("/company/update",compayController.update)
companyRouter.post("/company/deleteCom",compayController.deletePermanent)
companyRouter.post("/company/softDelete",compayController.softDelete)

companyRouter.post("/category/all",jobCategoryController.all)
companyRouter.post("/category/getSingle",jobCategoryController.getSingle)
companyRouter.post("/category/update",jobCategoryController.update)
companyRouter.post("/category/deleteCom",jobCategoryController.deletePermanent)
companyRouter.post("/category/softDelete",jobCategoryController.softDelete)


companyRouter.post("/job/all",jobController.all)
// companyRouter.post("/job/getSingle",jobController.getSingle)
// companyRouter.post("/job/update",jobController.update)
// companyRouter.post("/job/deleteCom",jobController.deletePermanent)
// companyRouter.post("/job/softDelete",jobController.softDelete)




module.exports = companyRouter