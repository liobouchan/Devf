"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var ProductoSchema = new Schema({
  "nombre": {
    type: String,
    required: true
  },
  "precio": {
    type: String,
    required: true
  },
  "foto": {
    type: String,
    default: "https://i.kinja-img.com/gawker-media/image/upload/s--yQNssSv---/c_scale,f_auto,fl_progressive,q_80,w_800/hrp50xxvosnilpawgsjr.jpg"
  },
  "descripcion": {
    type: String,
    required: true
  },
  "tipo": {
    type: String,
    required: true
  },
  "tienda": {
    type: Schema.Types.ObjectId,
    ref: 'Tienda'
  }
}, { collection: 'Producto', timestamps: true });

exports.default = _mongoose2.default.model('Producto', ProductoSchema);