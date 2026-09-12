const CandidateModel = require("./candidateModel")


const add = async (req, res) => {
   try{

    const formData = req.body || {}

    let validation = ""

    if(!formData.name){
        validation += "name is required , "
    }
    if(!formData.bio){
        validation += "bio is required , "
    }
    if(!!validation){
        return res.json({
             status: 400,
                success: false,
                message: validation
        })
    }

    let count = await CandidateModel.countDocuments({})

    let candidateObj = new CandidateModel()

        candidateObj.name = formData.name
        candidateObj.bio = formData.description
        candidateObj.skills = formData.skills
        candidateObj.linkedinUrl = formData.linkedinUrl
        candidateObj.githubUrl = formData.githubUrl

        candidateObj.autoId = "Can-" + (count + 1)

        const candidateData = await candidateObj.save()

        return res.json({
              status: 200,
            success: true,
            message: "Company Added",
            data: candidateData
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

        const totalDocs = await CandidateModel.countDocuments(formData)

        const candidate = await CandidateModel.find(formData)

        return res.json({
             status: 200,
            success: true,
            message: "candidate Loaded",
            total: totalDocs,
            data: candidate
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

    const candidate = await CandidateModel.findOne({
        _id: formData._id
    })

    if(candidate){
        return res.json({
                status: 200,
                success: true,
                message: "candidate Loaded",
                data: candidate
            });

             return res.json({
            status: 404,
            success: false,
            message: "No candidate found with such _id"
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

        const candidate = await CandidateModel.findOne({_id: formData._id})

        if(!candidate){
            return res.json({
                 status: 404,
                success: false,
                message: "candidate Not Found"
            })
        }

        if(candidate.name){
            candidate.name = formData.name
        }
        if(candidate.bio){
            candidate.bio = formData.bio
        }

        const updateCandidate = await candidate.save()

        res.json({
            status: 200,
            success: true,
            message: "candidate Updated",
            data: updateCandidate
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

        const candidate = await CandidateModel.findOne({_id})
        if(!candidate){
            return res.json({
                status: 404,
                success: false,
                message: "No such candidate found"
            })
        }

        const deleted = await CandidateModel.deleteOne({_id})

        return res.json({
             status: 200,
            success: true,
            message: "candidate deleted permanently",
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

    const candidate = await CandidateModel.findOne({_id})

    if(!candidate){
        return res.json({
                status: 404,
                success: false,
                message: "No such candidate"
            });
    }

    candidate.isDelete = true

    const savedCompany = await category.save()

          return res.json({
            status: 200,
            success: true,
            message: "candidate Deleted"
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










