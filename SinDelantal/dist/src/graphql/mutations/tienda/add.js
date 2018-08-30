'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _tienda = require('../../../models/tienda');

var _tienda2 = _interopRequireDefault(_tienda);

var _tienda3 = require('../../types/tienda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _tienda3.StoreType,
    args: {
        data: {
            type: new _graphql.GraphQLNonNull(_tienda3.StoreInputType)
        }
    },
    resolve: function resolve(root, params) {
        var tienda = new _tienda2.default(params.data);
        var newTienda = tienda.save();
        if (!newTienda) throw Error("Error al crear la tienda en la base de datos :(");
        return newTienda;
    }
};