"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose.default.Schema;
var ObjectId = _mongoose.default.Schema.Types.ObjectId;
var archiveSchema = new Schema({
  id: ObjectId,
  close: String,
  date: String,
  high: String,
  low: String,
  open: String,
  symbol: String,
  volume: String
}, {
  collection: 'stocks'
});

var Stocks = _mongoose.default.model('Stocks', archiveSchema);

module.exports = Stocks;