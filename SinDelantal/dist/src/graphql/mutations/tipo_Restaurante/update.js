'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var _tipo_Restaurante = require('../../../models/tipo_Restaurante');

var _tipo_Restaurante2 = _interopRequireDefault(_tipo_Restaurante);

var _tipo_Restaurante3 = require('../../types/tipo_Restaurante');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _tipo_Restaurante3.type_RestaurantType,
    args: {
        id: {
            name: 'ID',
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new _graphql.GraphQLNonNull(_tipo_Restaurante3.type_RestaurantInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _tipo_Restaurante2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }, { new: true }).then(function (tipo) {
            return tipo;
        }).catch(function (err) {
            return Error('Error al hacer el update');
        });
    }
};