const Joi = require("joi")

const CategoryModel = require("./CategoryModel")


let product = []
const Add = async (req, res) => {


    //  const schema = Joi.object({
    //     name: Joi.string()
    //         .min(3)
    //         .max(50)
    //         .required(),

    //     description: Joi.string()
    //         .min(10)
    //         .max(500)
    //         .required()
    // })

    //   const { error } = schema.validate(req.body)

    
    // if (error) {
    //     return res.status(400).send({
    //         success: false,
    //         message: error.details[0].message
    //     })
    // }


        let errMsg = []

    if (!req.body.name) {
        errMsg.push("name is required")
    }
    if (!req.body.description) {
        errMsg.push("description is required")
    }

    if (errMsg.length > 0) {
        res.send({
            message: errMsg,
            success: false,
            status: 404
        })
    } else {


        let ExistData = await CategoryModel.findOne({ name: req.body.name })

        if (ExistData != null) {
            return res.send({
                message: "Category Already Exist",
                status: 422,
                success: false
            })
        }
    }

    

    let obj = new CategoryModel()

    obj.name =  req.body.name
    obj.description = req.body.description
    obj.image = req.body.image
    obj.price = req.body.price
    obj.stock = req.body.stock

     obj.save().then((data) =>{
        res.send(data)
    }).catch((err) =>{
        res.send(err)
    })
    product.push(obj)
    console.log(product);
    
    
}
const All = async (req, res) => {

    try {
        let Data = await CategoryModel.find()

        if(Data !=null){
             res.send({
                message: "category Loaded",
                status: 200,
                total:Data.length,
                success: true,
                data:Data
            })
        }else{
             res.send({
                message: "category Not Loaded",
                status: 404,
                success: false
            })
        }

    } catch (err) {
        res.send({
            message: "Internal Server Error",
            status: 500,
            success: false
        })
    }
}

const getSingle = async (req, res) => {
    try {
        let id = req.body._id
        

        let Data = await CategoryModel.findOne({ _id: id })

        if (Data != null) {
            res.send({
                status: 200,
                success: true,
                message: "Data Loaded",
                data: Data
            })
        } else {
            res.send({
                status: 404,
                success: false,
                message: "Data not found"
            })
        }
    } catch (err) {
        res.send({
            message: "Internal Server Error",
            status: 500,
            success: false
        })
    }


}

const deleteCate = async (req, res) => {
    try {
        let id = req.body._id

        let Data = await CategoryModel.findOne({ _id: id })

        if (Data != null) {
            CategoryModel.deleteOne({ _id: id }).then((DeletedCategory) => {
                res.send({
                    status: 204,
                    success: true,
                    message: "Category successfully Deleted",
                    data:DeletedCategory
                })
            }).catch((err) => {
                res.send({
                    status: 402,
                    success: false,
                    message: err
                })
            })
        } else {
            res.send({
                status: 404,
                success: false,
                message: "Data not found"
            })
        }
    } catch (err) {
        res.send({
            message: "Internal Server Error",
            status: 500,
            success: false
        })
    }


}

// const single = (req, res) => {
//     let {items, name} = req.body

//     let filterItem = product.filter((ele) =>{
//         return ele.name.toLowerCase().includes(items)
//     })

//     res.send(filterItem)
// }


module.exports={Add, All , getSingle ,deleteCate}