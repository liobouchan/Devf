'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _pedido = require('../../../models/pedido');

var _pedido2 = _interopRequireDefault(_pedido);

var _pedido3 = require('../../types/pedido');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllPedidos = {
    type: new _graphql.GraphQLList(_pedido3.PedidosType),
    resolve: function resolve() {
        var pedido = _pedido2.default.find().exec();
        return pedido;
    }
};

exports.default = queryAllPedidos;