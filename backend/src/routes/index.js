import express from 'express';
import config from '../config';
import middleware from '../middleware'; 
import initializedDb from '../db';
import archive from '../controller/archive';

let router = express();

//connect to db
initializedDb(db=>{
    //internal middleware
    router.use(middleware({config, db}));

    //api routes
    router.use('/stocks', archive({config, db}));
})

export default router;
