import mongoose from 'mongoose';
import config from './config';

export default callback => {
    let db = mongoose.connect(config.mongoUrl, { useNewUrlParser: true});
    mongoose.Promise = global.Promise;
    callback(db, (err, db)=>{
        if(err){
            res.json({success: false, error:err});
        }
        res.json({success: true, data: db});
    });
}