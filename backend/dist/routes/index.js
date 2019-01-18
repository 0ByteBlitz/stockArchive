"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("../config"));

var _middleware = _interopRequireDefault(require("../middleware"));

var _db = _interopRequireDefault(require("../db"));

var _archive = _interopRequireDefault(require("../controller/archive"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.default)(); //connect to db

(0, _db.default)(function (db) {
  //internal middleware
  router.use((0, _middleware.default)({
    config: _config.default,
    db: db
  })); //api routes

  router.use('/stocks', (0, _archive.default)({
    config: _config.default,
    db: db
  }));
});
var _default = router;
exports.default = _default;