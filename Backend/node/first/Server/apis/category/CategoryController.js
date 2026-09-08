const Joi = require("joi")

const CategoryModel = require("./CategoryModel")


let product = []
const Add = (req, res) => {


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
const All = (req, res) => {
    res.send("api all working")
}

const single = (req, res) => {
    let items = req.body.item

    let filterItem = product.filter((ele) =>{
        return ele.name.includes(items)
    })

    res.send(filterItem)
}


module.exports={Add, All , single}