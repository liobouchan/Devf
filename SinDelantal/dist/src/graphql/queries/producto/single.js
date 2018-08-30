'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _user = require('../../../models/user');

var _user2 = _interopRequireDefault(_user);

var _producto = require('../../types/producto');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querySingleProduct = {
    type: _producto.ProductType,
    args: {
        id: {
            name: 'ID',
            type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var producto = _user2.default.findById(params.id).exec();
        return producto;
    }
};

exports.default = querySingleProduct;