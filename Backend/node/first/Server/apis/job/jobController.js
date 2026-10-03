const { uploadImg } = require("../../utilities/helper")
const jobModel = require("./jobModel")


const add = async (req, res) => {
   try{

    const formData = req.body || {}

    let validation = ""

    // if(!formData.name){
    //     validation += "name is required , "
    // }
    // if(!formData.description){
    //     validation += "description is required , "
    // }
    // if(!!validation){
    //     return res.json({
    //          status: 400,
    //             success: false,
    //             message: validation
    //     })
    // }

    let count = await jobModel.countDocuments({})

    let jobObj = new jobModel()

        jobObj.jobType = formData.jobType
        jobObj.description = formData.description
        jobObj.title = formData.title
        jobObj.workMode = formData.workMode
        jobObj.category = formData.category
       
        

        jobObj.autoId = "CAT-" + (count + 1)

        // console.log(req.file);
        
        
        // if(!!req.file){
        //     jobCategoryObj.image = await uploadImg(req.file.buffer)
        // }

        const jobData = await jobObj.save()

        return res.json({
              status: 200,
            success: true,
            message: "job Added",
            data: jobData
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

        const totalDocs = await jobModel.countDocuments(formData)

        const job = await jobModel.find(formData)

        return res.json({
             status: 200,
            success: true,
            message: "job Loaded",
            total: totalDocs,
            data: job
        })

    }catch(err){
        return res.json({
             status: 500,
            success: false,
            message: "Internal Server Error: " + err
        })
    }

   
}


module.exports = { add ,all}










