const CompanyModel = require("./companyModel")


const add = async (req, res) => {
   try{

    const formData = req.body || {}

    let validation = ""

    if(!formData.companyName){
        validation += "name is required , "
    }
    if(!formData.description){
        validation += "description is required , "
    }
    if(!!validation){
        return res.json({
             status: 400,
                success: false,
                message: validation
        })
    }

    let count = await CompanyModel.countDocuments({})

    let companyObj = new CompanyModel()

        companyObj.companyName = formData.companyName
        companyObj.description = formData.description
        companyObj.industry = formData.industry
        companyObj.companySize = formData.companySize
        companyObj.website = formData.website

        companyObj.autoId = "Com-" + (count + 1)

        const compnayData = await companyObj.save()

        return res.json({
              status: 200,
            success: true,
            message: "Company Added",
            data: compnayData
        })


   }catch(err){
         res.json({
             status: 500,
            success: false,
            message: "Internal server error" + err
        })
   }
    
          

}

const all = async (req, res) => {
    try{

        const formData = req.body || {}

        const totalDocs = await CompanyModel.countDocuments(formData)

        const company = await CompanyModel.find(formData)

        return res.json({
             status: 200,
            success: true,
            message: "Company Loaded",
            total: totalDocs,
            data: company
        })

    }catch(err){
        return res.json({
             status: 500,
            success: false,
            message: "Internal Server Error: " + err
        })
    }

   
}

const getSingle = async (req, res) => {
  try{
    const formData = req.body || {}

    if(!formData._id){
         return res.json({
                status: 400,
                success: false,
                message: "_id is required"
            });
    }

    const company = await CompanyModel.findOne({
        _id: formData._id
    })

    if(company){
        return res.json({
                status: 200,
                success: true,
                message: "company Loaded",
                data: company
            });

             return res.json({
            status: 404,
            success: false,
            message: "No company found with such _id"
        });
    }

  }catch(err){
          return res.json({
            status: 500,
            success: false,
            message: "Internal Server Error: " + err.message
        });
  }
}

const update = async (req, res) => {
    try{

        const formData = req.body || {}

        if(!formData._id){
            return res.json({
                  status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const company = await CompanyModel.findOne({_id: formData._id})

        if(!company){
            return res.json({
                 status: 404,
                success: false,
                message: "company Not Found"
            })
        }

        if(company.companyName){
            company.companyName = formData.companyName
        }
        if(company.description){
            company.description = formData.description
        }

        const updateCompany = await company.save()

        res.json({
            status: 200,
            success: true,
            message: "company Updated",
            data: updateCompany
        })

    }catch(err){
        return res.json({
            status: 500,
            success: false,
            message: "ISE: " + err
        })
    }

}


const deletePermanent = async (req, res) => {
    try{
        const {_id} = req.body

        if(!_id){
            return res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const company = await CompanyModel.findOne({_id})
        if(!company){
            return res.json({
                status: 404,
                success: false,
                message: "No such company found"
            })
        }

        const deleted = await CompanyModel.deleteOne({_id})

        return res.json({
             status: 200,
            success: true,
            message: "company deleted permanently",
            data: deleted
        })

    }catch(err){
        return res.json({
             status: 500,
            success: false,
            message: "Internal Server Error",
            error: err.message
        })
    }
}

const softDelete =async (req, res) => {
  try{
    const {_id} = req.body

    if(!_id){
        return res.json({
            status: 400,
            success: false,
            message: "_id is required"
        })
    }

    const company = await CompanyModel.findOne({_id})

    if(!company){
        return res.json({
                status: 404,
                success: false,
                message: "No such company"
            });
    }

    company.isDelete = true

    const savedCompany = await category.save()

          return res.json({
            status: 200,
            success: true,
            message: "company Deleted"
        });

  }catch(err){
    return res.json({
            status: 500,
            success: false,
            message: "Internal Server Error: " + err.message
        });
  }

}



module.exports = { add, all, getSingle, update, deletePermanent, softDelete }










