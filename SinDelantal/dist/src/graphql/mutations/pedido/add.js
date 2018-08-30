'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _pedido = require('../../../models/pedido');

var _pedido2 = _interopRequireDefault(_pedido);

var _pedido3 = require('../../types/pedido');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _pedido3.PedidosType,
    args: {
        data: {
            type: new _graphql.GraphQLNonNull(_pedido3.PedidosInputType)
        }
    },
    resolve: function resolve(root, params) {
        var pedido = new _pedido2.default(params.data);
        var newPedido = pedido.save();
        if (!newPedido) throw Error("Error al crear la pedido en la base de datos :(");
        return newPedido;
    }
};