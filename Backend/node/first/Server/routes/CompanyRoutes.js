const companyRouter = require("express").Router()

const compayController = require("../apis/company/compayController")





companyRouter.post("/company/add",compayController.add)
companyRouter.post("/company/all",compayController.all)
companyRouter.post("/company/getSingle",compayController.getSingle)
companyRouter.post("/company/update",compayController.update)
companyRouter.post("/company/deleteCom",compayController.deletePermanent)
companyRouter.post("/company/softDelete",compayController.softDelete)





module.exports = companyRouter