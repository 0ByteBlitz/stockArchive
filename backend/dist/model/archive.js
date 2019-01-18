"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose.default.Schema;
var archiveSchema = new Schema({
  id: objectid,
  close: String,
  date: String,
  high: String,
  low: String,
  open: String,
  symbol: String,
  volume: String
});

var Archive = _mongoose.default.model('Archive', archiveSchema);

module.exports = Archive;