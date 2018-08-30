"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var PedidoSchema = new Schema({
  "status_pedido": {
    type: Boolean,
    required: true
  },
  "status_pago": {
    type: Boolean,
    required: true
  },
  "direccion": {
    type: String,
    required: true
  },
  "cupon": {
    type: Schema.Types.ObjectId,
    ref: 'Cupon'
  },
  "user": {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  "tienda": {
    type: Schema.Types.ObjectId,
    ref: 'Tienda'
  },
  "monto": {
    type: String,
    required: true
  },
  "Productos": [{
    type: Schema.Types.ObjectId,
    ref: 'Producto'
  }]
}, { collection: 'Pedido', timestamps: true });

exports.default = _mongoose2.default.model('Pedido', PedidoSchema);