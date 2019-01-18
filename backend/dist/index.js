"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.server = _http.default.createServer(app);
app.use((0, _morgan.default)('combined')); //middlewares
//parse application/json

app.use(_bodyParser.default.json({
  limit: _config.default.bodyLimit
}));
app.use(_bodyParser.default.urlencoded({
  extended: true
})); //api routes

app.use('/api', _routes.default);
app.server.listen(_config.default.port);
console.log("Server started on port ".concat(app.server.address().port));
var _default = app;
exports.default = _default;