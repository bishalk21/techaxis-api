import express from 'express';
import {
    insertAdmin
} from '../modal/admin-user/AdminModel.js';
const router = express.Router();

router.get('/', (req, res, next) => {


    console.log(user);
    try {
        res.json({
            status: 'success',
            message: 'Admin dashboard',

        })
    } catch (error) {
        next(error);
    }
})

router.post("/", async (req, res, next) => {
    try {

        console.log(req.body);

        res.json({
            status: 'success',
            message: 'Admin registered',

        })
    } catch (error) {
        next(error);
    }
})

export default router;