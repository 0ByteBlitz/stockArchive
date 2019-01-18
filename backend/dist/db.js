"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(callback) {
  var db = _mongoose.default.connect(_config.default.mongoUrl, {
    useNewUrlParser: true
  });

  _mongoose.default.Promise = global.Promise;
  callback(db, function (err, db) {
    if (err) {
      res.json({
        success: false,
        error: err
      });
    }

    res.json({
      success: true,
      data: db
    });
  });
};

exports.default = _default;