'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var _cupon = require('../../../models/cupon');

var _cupon2 = _interopRequireDefault(_cupon);

var _cupon3 = require('../../types/cupon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _cupon3.CuponType,
    args: {
        id: {
            name: 'ID',
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new _graphql.GraphQLNonNull(_cupon3.CuponInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _cupon2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }, { new: true }).then(function (cupon) {
            return cupon;
        }).catch(function (err) {
            return Error('Error al Hacer el update del cupon');
        });
    }
};