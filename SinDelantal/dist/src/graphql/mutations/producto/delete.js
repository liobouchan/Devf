'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _producto = require('../../../models/producto');

var _producto2 = _interopRequireDefault(_producto);

var _producto3 = require('../../types/producto');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _producto3.ProductType,
    args: {
        id: {
            name: 'ID',
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var deleteProducto = _producto2.default.findByIdAndRemove(params.id).exec();
        if (!deleteProducto) throw Error('Error al borrar un producto');
        return deleteProducto;
    }
};