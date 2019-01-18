import { Router } from 'express';
import mongoose from 'mongoose';
import Stocks from '../model/stocks';

export default({config, db}) =>{
    let api = Router();

    //stocks/get
    api.get('/', (req, res)=>{
        Stocks.find({}, (err, stocks) => {
            if(err){
                res.send(err);
            }
            res.json({success: true, data: stocks});
        }).sort({"high": -1}).limit(1000);
    });
    return api;

}