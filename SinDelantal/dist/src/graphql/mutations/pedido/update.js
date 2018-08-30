'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        },
        data: {
            name: 'data',
            type: new _graphql.GraphQLNonNull(_pedido3.PedidosInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _pedido2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }, { new: true }).then(function (pedido) {
            return pedido;
        }).catch(function (err) {
            return Error('Error al hacer el update del pedido');
        });
    }
};