const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'orovkgyf',
    api_key: '363815729271898',
    api_secret: 'CoMI2qHJDlbceKpW5nKSj3fjFGY'
});

const uploadImg = async (fileBuffer) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
            resource_type: "auto"
        }, (error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(result.secure_url)
            }
        }).end(fileBuffer)
    })
}

module.exports = { uploadImg }
