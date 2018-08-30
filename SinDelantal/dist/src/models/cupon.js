"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var CuponSchema = new Schema({
  "cupon": {
    type: String,
    required: true
  },
  "descuento": {
    type: String,
    required: true
  },
  "descripcion": {
    type: String,
    required: true
  }
}, { collection: 'Cupon', timestamps: true });

exports.default = _mongoose2.default.model('Cupon', CuponSchema);