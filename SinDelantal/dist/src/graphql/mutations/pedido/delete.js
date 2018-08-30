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
        id: {
            name: 'ID',
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var deletePedido = _pedido2.default.findByIdAndRemove(params.id).exec();
        if (!deletePedido) throw Error('Error al borrar el pedido');
        return deletePedido;
    }
};