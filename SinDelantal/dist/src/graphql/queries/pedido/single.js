'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _pedido = require('../../../models/pedido');

var _pedido2 = _interopRequireDefault(_pedido);

var _pedido3 = require('../../types/pedido');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querySinglePedido = {
    type: _pedido3.PedidosType,
    args: {
        id: {
            name: 'ID',
            type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var pedido = _pedido2.default.findById(params.id).exec();
        return pedido;
    }
};

exports.default = querySinglePedido;