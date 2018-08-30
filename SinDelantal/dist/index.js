'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _graphql = require('./src/graphql');

var _graphql2 = _interopRequireDefault(_graphql);

var _user = require('./src/models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 8000;
var mongoURI = process.env.MONGODB_URI || "mongodb://admin123:admin123@ds133311.mlab.com:33311/bringeit";

_mongoose2.default.connect(mongoURI, { useNewUrlParser: true });
var db = _mongoose2.default.connection;
db.on('error', function () {
  return console.log('Eror en conectar a la base de datos');
}).once('open', function () {
  return console.log("Conectado a la Base De Datos");
});

app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());

app.get('/', function (req, res) {
  res.send('Sin Delantal on');
});

app.post('/user/create', function (req, res) {
  var user = req.body;

  console.log(user);
  _user2.default.create(user).then(function (user) {
    console.log(user._id);
    return res.status(201).json({
      message: 'Usuario Creado',
      id: user._id
    });
  }).catch(function (err) {
    console.log(err);
    return res.status(400).json(err);
  });
});

app.use('/graphql', (0, _expressGraphql2.default)(function (req, res) {
  return {
    schema: _graphql2.default,
    graphiql: true,
    pretty: true
  };
}));

app.listen(PORT, function () {
  return console.log('Server on ' + PORT);
});