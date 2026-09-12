const LostFoundModel = require("./lostFoundModel")

// const add = async(req,res) =>{
//     const lostObj = new LostFoundModel()

// }



const add = async (req, res) => {
    try {

        const formData = req.body || {}

        let validation = ""

        if (!formData.itemName) {
            validation += "itemName is required, "
        }

        if (!formData.description) {
            validation += "description is required, "
        }

        if (!formData.category) {
            validation += "category is required, "
        }

        if (!formData.location) {
            validation += "location is required, "
        }

        if (!formData.reportedBy) {
            validation += "reportedBy is required, "
        }

        if (!formData.contactNumber) {
            validation += "contactNumber is required, "
        }

        if (validation) {
            return res.json({
                status: 400,
                success: false,
                message: validation
            })
        }


        const item = new LostFoundModel()

        item.itemName = formData.itemName
        item.description = formData.description
        item.category = formData.category
        item.location = formData.location
        item.reportedBy = formData.reportedBy
        item.contactNumber = formData.contactNumber

        if (formData.status) {
            item.status = formData.status
        }

        const data = await item.save()

        return res.json({
            status: 200,
            success: true,
            message: "Item added successfully",
            data: data
        })

    } catch (error) {

        return res.json({
            status: 500,
            success: false,
            message: error.message
        })
    }
}



const all = async (req, res) => {
    try {

        const data = await LostFoundModel.find()

        return res.json({
            status: 200,
            success: true,
            message: "All items fetched successfully",
            data: data
        })

    } catch (error) {

        return res.json({
            status: 500,
            success: false,
            message: error.message
        })
    }
}



const single = async (req, res) => {
    try {

        const formData = req.body || {}

        if (!formData._id) {
            return res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }

        const data = await LostFoundModel.findOne({
            _id: formData._id
        })

        if (!data) {
            return res.json({
                status: 404,
                success: false,
                message: "No item found with this _id"
            })
        }

        return res.json({
            status: 200,
            success: true,
            message: "Item found successfully",
            data: data
        })

    } catch (error) {

        return res.json({
            status: 500,
            success: false,
            message: error.message
        })
    }
}



const update = async (req, res) => {
    try {

        const formData = req.body || {}

        if (!formData._id) {
            return res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }


        const item = await LostFoundModel.findOne({
            _id: formData._id
        })

        if (!item) {
            return res.json({
                status: 404,
                success: false,
                message: "No item found with this _id"
            })
        }


        if (formData.itemName) {
            item.itemName = formData.itemName
        }

        if (formData.description) {
            item.description = formData.description
        }

        if (formData.category) {
            item.category = formData.category
        }

        if (formData.location) {
            item.location = formData.location
        }

        if (formData.reportedBy) {
            item.reportedBy = formData.reportedBy
        }

        if (formData.contactNumber) {
            item.contactNumber = formData.contactNumber
        }

        if (formData.status) {
            item.status = formData.status
        }


        const data = await item.save()

        return res.json({
            status: 200,
            success: true,
            message: "Item updated successfully",
            data: data
        })

    } catch (error) {

        return res.json({
            status: 500,
            success: false,
            message: error.message
        })
    }
}



const deleteItem = async (req, res) => {
    try {

        const formData = req.body || {}

        if (!formData._id) {
            return res.json({
                status: 400,
                success: false,
                message: "_id is required"
            })
        }


        const item = await LostFoundModel.findOne({
            _id: formData._id
        })

        if (!item) {
            return res.json({
                status: 404,
                success: false,
                message: "No item found with this _id"
            })
        }


        await LostFoundModel.deleteOne({
            _id: formData._id
        })


        return res.json({
            status: 200,
            success: true,
            message: "Item deleted successfully"
        })

    } catch (error) {

        return res.json({
            status: 500,
            success: false,
            message: error.message
        })
    }
}


module.exports = {
    add,
    all,
    single,
    update,
    deleteItem
}