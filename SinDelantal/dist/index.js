'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;
var mongoURI = process.env.MONGODB_URI || "mongodb://admin123:admin123@ds133311.mlab.com:33311/bringeit";

_mongoose2.default.db = connect(mongoURI, { useNewUrlParser: true });
var db = _mongoose2.default.connection;
db.on('error', function () {
  return console.log('Eror en conectar a la base de datos');
}).once('open', function () {
  return console.log("Conectado a la Base De Datos");
});

app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());

app.get('/', function (req, res) {
  res.send('Server on');
});

app.listen(3000, function () {
  return console.log('Server on 3000');
});