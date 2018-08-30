'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _cupon = require('../../../models/cupon');

var _cupon2 = _interopRequireDefault(_cupon);

var _cupon3 = require('../../types/cupon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _cupon3.CuponType,
    args: {
        data: {
            type: new _graphql.GraphQLNonNull(_cupon3.CuponInputType)
        }
    },
    resolve: function resolve(root, params) {
        var cupon = new _cupon2.default(params.data);
        var newCupon = cupon.save();
        if (!newCupon) throw Error("Error al crear el Cupon");
        return newCupon;
    }
};