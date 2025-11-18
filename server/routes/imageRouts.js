import express from 'express'
import {generateImage} from '../controlers/imageController.js'
import userAuth from '../midddleware/auth.js';

const imageRouter=express.Router();
imageRouter.post('/generate-image', userAuth ,generateImage)


export default imageRouter