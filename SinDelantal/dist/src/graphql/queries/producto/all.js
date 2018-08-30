'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _producto = require('../../../models/producto');

var _producto2 = _interopRequireDefault(_producto);

var _producto3 = require('../../types/producto');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllProductos = {
    type: (0, _graphql.GraphQLList)(_producto3.ProductType),
    resolve: function resolve() {
        var producto = _producto2.default.find.exec();
        if (!producto) throw new Error('No se pueden obtener todos los productos');
        return producto;
    }
};

exports.default = queryAllProductos;