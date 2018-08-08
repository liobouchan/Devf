'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SALT = 20;
var Schema = _mongoose2.default.Schema;
var UserSchema = new Schema({
  "nombre": {
    type: String,
    required: true
  },
  "apellidos": {
    type: String,
    required: true
  },
  "fecha_nacimiento": {
    type: Date,
    required: true
  },
  "correo": {
    type: String,
    required: true
  },
  "telefono": {
    type: Number,
    required: true
  },
  "genero": {
    type: String,
    required: true
  },
  "username": {
    type: String,
    required: true
  },
  "foto": {
    type: String,
    default: "https://www.thehindu.com/sci-tech/technology/internet/article17759222.ece/alternates/FREE_660/02th-egg-person"
  },
  "password": {
    type: String,
    required: true
  },
  "direcciones": [{
    type: String,
    required: true
  }],
  "card": [{
    "card_number": Number,
    "expiration": String,
    "code": Number
  }]
}, { collection: 'User', timestamps: true });

UserSchema.pre('save', function (next) {
  var user = undefined;

  if (!user.isModified('password')) {
    return next();
  }

  _bcrypt2.default.genSalt(SALT, function (err, salt) {
    if (err) return next(err);
    _bcrypt2.default.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

exports.default = _mongoose2.default.model('User', UserSchema);