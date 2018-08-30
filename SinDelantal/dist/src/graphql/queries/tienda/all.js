'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _tienda = require('../../../models/tienda');

var _tienda2 = _interopRequireDefault(_tienda);

var _tienda3 = require('../../types/tienda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllTiendas = {
    type: (0, _graphql.GraphQLList)(_tienda3.StoreType),
    resolve: function resolve() {
        var tienda = _tienda2.default.find().exec();
        if (!tienda) throw new Error('No se pudieron obtener todas las tiendas disponibles');
        return tienda;
    }
};

exports.default = queryAllTiendas;