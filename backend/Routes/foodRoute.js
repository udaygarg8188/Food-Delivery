import express from 'express'
import { addFood, listFood, removeFood } from '../controllers/foodController.js'
import pkg from 'aws-sdk';
const { S3 } = pkg;
import multer from 'multer'

const foodRouter = express.Router();

// Image Storage Engine

// const storage = multer.diskStorage({
//     destination:"uploads",
//     filename:(req,file,cb)=>{
//         return cb(null,`${Date.now()}${file.originalname}`)
//     }
// })

const s3 = new S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});


const storage = multer.memoryStorage();

const upload = multer({storage:storage});

foodRouter.post("/add", upload.single("image"), async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).send("No file uploaded.");
        }

        // Upload to S3
        const params = {
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: `${Date.now()}_${req.file.originalname}`,
            Body: req.file.buffer,
            ContentType: req.file.mimetype,
        };

        const data = await s3.upload(params).promise();

        // Assuming addFood function takes the S3 URL as an argument
        req.body.imageUrl = data.Location;
        await addFood(req, res);
    } catch (error) {
        next(error);
    }
});


// foodRouter.post("/add", upload.single("image"), addFood);

foodRouter.get("/list",listFood);

foodRouter.post("/remove",removeFood);



export default foodRouter;
