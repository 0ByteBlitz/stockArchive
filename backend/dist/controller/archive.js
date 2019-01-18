"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _stocks = _interopRequireDefault(require("../model/stocks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var config = _ref.config,
      db = _ref.db;
  var api = (0, _express.Router)(); //stocks/get

  api.get('/', function (req, res) {
    _stocks.default.find({}, function (err, stocks) {
      if (err) {
        res.send(err);
      }

      res.json({
        success: true,
        data: stocks
      });
    }).sort({
      "high": -1
    }).limit(1000);
  });
  return api;
};

exports.default = _default;