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
        data: {
            type: new _graphql.GraphQLNonNull(_producto3.ProductInputType)
        }
    },
    resolve: function resolve(root, params) {
        var product = new _producto2.default(params.data);
        var newProduct = product.save();
        if (!newProduct) throw Error('Error al crear el nuevo producto');
        return newPropiedad;
    }
};