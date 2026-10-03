const { uploadImg } = require("../../utilities/helper")
const jobCategoryModel = require("./jobCategoryModel")


const add = async (req, res) => {
   try{

    const formData = req.body || {}

    let validation = ""

    if(!formData.name){
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

    let count = await jobCategoryModel.countDocuments({})

    let jobCategoryObj = new jobCategoryModel()

        jobCategoryObj.name = formData.name
        jobCategoryObj.description = formData.description
        jobCategoryObj.image = formData.image
       
        

        jobCategoryObj.autoId = "CAT-" + (count + 1)

        console.log(req.file);
        
        
        if(!!req.file){
            jobCategoryObj.image = await uploadImg(req.file.buffer)
        }

        const jobCategoryData = await jobCategoryObj.save()

        return res.json({
              status: 200,
            success: true,
            message: "jobCategory Added",
            data: jobCategoryData
        })


   }catch(err){
        console.log(err);
        
         res.json({
             status: 500,
            success: false,
            message: "Internal server error"
        })
   }
    
          

}

const all = async (req, res) => {
    try{

        const formData = req.body || {}

        let search = ''

    if (!!formData.search) {
        search=formData.search
        delete formData.search
    }


    let find={
    $and:[
        formData,
        {
            $or:[
              {name:{$regex:search, $options:"i"}}  ,
              {
                description:{
                    $regex:search,
                    $options:"i"
                }
              }
            ]
        }
    ]
}

        const totalDocs = await jobCategoryModel.countDocuments(formData)

        const categories = await jobCategoryModel.find(formData)

        return res.json({
             status: 200,
            success: true,
            message: "Categories Loaded",
            total: totalDocs,
            data: categories
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

    const category = await jobCategoryModel.findOne({
        _id: formData._id,
        isDelete : false
    })

    if(category){
        return res.json({
                status: 200,
                success: true,
                message: "Category Loaded",
                data: category
            });

             return res.json({
            status: 404,
            success: false,
            message: "No Category found with such _id"
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

        const category = await jobCategoryModel.findOne({_id: formData._id})

        if(!category){
            return res.json({
                 status: 404,
                success: false,
                message: "Category Not Found"
            })
        }

        if(category.name){
            category.name = formData.name
        }
        if(category.description){
            category.description = formData.description
        }

        const updateCategory = await category.save()

        res.json({
            status: 200,
            success: true,
            message: "Category Updated",
            data: updateCategory
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

        const category = await jobCategoryModel.findOne({_id})
        if(!category){
            return res.json({
                status: 404,
                success: false,
                message: "No such Category found"
            })
        }

        const deleted = await jobCategoryModel.deleteOne({_id})

        return res.json({
             status: 200,
            success: true,
            message: "Category deleted permanently",
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

    const category = await jobCategoryModel.findOne({_id})

    if(!category){
        return res.json({
                status: 404,
                success: false,
                message: "No such category"
            });
    }

    category.isDelete = true

    const savedCategory = await category.save()

          return res.json({
            status: 200,
            success: true,
            message: "Category Deleted"
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










