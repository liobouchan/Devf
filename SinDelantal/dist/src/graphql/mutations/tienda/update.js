'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var _tienda = require('../../../models/tienda');

var _tienda2 = _interopRequireDefault(_tienda);

var _tienda3 = require('../../types/tienda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _tienda3.StoreType,
    args: {
        id: {
            name: 'ID',
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new _graphql.GraphQLNonNull(_tienda3.StoreInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _tienda2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }, { new: true }).then(function (tienda) {
            return tienda;
        }).catch(function (err) {
            return Error('Error al hacer el update de tienda');
        });
    }
};