'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _tienda = require('../../../models/tienda');

var _tienda2 = _interopRequireDefault(_tienda);

var _tienda3 = require('../../types/tienda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querySingleTienda = {
    type: _tienda3.StoreType,
    args: {
        id: {
            name: 'ID',
            type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var tienda = _tienda2.default.findById(params.id).exec();
        return tienda;
    }
};

exports.default = querySingleTienda;