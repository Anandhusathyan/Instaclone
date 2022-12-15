const postRoute = require('express').Router()
const PostModel = require('../models/postDataModal')
const bodyParser = require('body-parser')
postRoute.use(bodyParser.json())
const cors = require("cors");
postRoute.use(cors());
const multer = require("multer")
// for storing files
const ownStorage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,  "local_folder/files" );
    },
    filename: (req,file,cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({storage:ownStorage})

postRoute.get('/PostView', async (req,res) => {
    try{
        // await PostModel.find((err,data) => {
        //     (err) ? console.log(err) : res.json(data)
        // })
        let found = await PostModel.find()
        res.send(found)
    } catch(err) {
        res.json({
            result : "failure"
        })
    }
})
postRoute.post('/PostData',upload.single("imageData"), async (req,res) => {
    try{
        console.log(req.body)
        await PostModel.create(req.body)
        res.status(200).json({
            result : "success",
            frontEndMessage : req.body,
            backEndMessage : req.files
        })
    } catch(err) {
        res.status(400).json({
            result : "failure",
            message: err.message
        })
    }
})
module.exports = postRoute;