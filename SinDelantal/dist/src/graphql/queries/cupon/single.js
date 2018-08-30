'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _cupon = require('../../../models/cupon');

var _cupon2 = _interopRequireDefault(_cupon);

var _cupon3 = require('../../types/cupon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querySingleCupon = {
    type: _cupon3.CuponType,
    args: {
        id: {
            name: 'ID',
            type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var cupon = _cupon2.default.findById(params.id).exec();
        return cupon;
    }
};

exports.default = querySingleCupon;