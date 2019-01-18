import mongoose from 'mongoose';
let Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

let archiveSchema = new Schema({
    id: ObjectId,
    close: String,
    date: String,
    high: String,
    low: String,
    open: String,
    symbol: String,
    volume: String
}, { collection: 'stocks'});

var Stocks = mongoose.model('Stocks', archiveSchema);
module.exports = Stocks;


