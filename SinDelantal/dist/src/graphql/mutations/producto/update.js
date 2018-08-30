'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        },
        data: {
            name: 'data',
            type: new _graphql.GraphQLNonNull(_producto3.ProductInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _producto2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }, { new: true }).then(function (producto) {
            return producto;
        }).catch(function (err) {
            return Error('Error al hacer un update del producto');
        });
    }
};