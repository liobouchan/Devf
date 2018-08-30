'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _cupon = require('./cupon');

var _cupon2 = _interopRequireDefault(_cupon);

var _producto = require('./producto');

var _producto2 = _interopRequireDefault(_producto);

var _tipo_Restaurante = require('./tipo_Restaurante');

var _tipo_Restaurante2 = _interopRequireDefault(_tipo_Restaurante);

var _tienda = require('./tienda');

var _tienda2 = _interopRequireDefault(_tienda);

var _pedido = require('./pedido');

var _pedido2 = _interopRequireDefault(_pedido);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _cupon2.default, _producto2.default, _tipo_Restaurante2.default, _tienda2.default, _pedido2.default);