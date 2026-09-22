const CategoryModel = require("./CategoryModel")


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

    let count = await CategoryModel.countDocuments({})

    let categoryObj = new CategoryModel()

        categoryObj.name = formData.name
        categoryObj.description = formData.description
        // categoryObj.image = formData.image
        categoryObj.price = formData.price
        categoryObj.stock = formData.stock

        categoryObj.autoId = "CAT-" + (count + 1)
        console.log("req.file" + req.file);
        
        if(!!req.file){
            categoryObj.image = "category/" + req.file.filename
        }

        const categoryData = await categoryObj.save()

        return res.json({
              status: 200,
            success: true,
            message: "Category Added",
            data: categoryData
        })


   }catch(err){
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

        const totalDocs = await CategoryModel.countDocuments(formData)

        const categories = await CategoryModel.find(formData)

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

    const category = await CategoryModel.findOne({
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

        const category = await CategoryModel.findOne({_id: formData._id})

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

        const category = await CategoryModel.findOne({_id})
        if(!category){
            return res.json({
                status: 404,
                success: false,
                message: "No such Category found"
            })
        }

        const deleted = await CategoryModel.deleteOne({_id})

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

    const category = await CategoryModel.findOne({_id})

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










