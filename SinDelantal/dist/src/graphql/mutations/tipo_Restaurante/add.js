'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _tipo_Restaurante = require('../../../models/tipo_Restaurante');

var _tipo_Restaurante2 = _interopRequireDefault(_tipo_Restaurante);

var _tipo_Restaurante3 = require('../../types/tipo_Restaurante');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _tipo_Restaurante3.type_RestaurantType,
    args: {
        data: {
            type: new _graphql.GraphQLNonNull(_tipo_Restaurante3.type_RestaurantInputType)
        }
    },
    resolve: function resolve(root, params) {
        var tipo = new _tipo_Restaurante2.default(params.data);
        var newTipo = tipo.save();
        if (!newTipo) throw Error('Error al crear nuevo Tipo de Restaurante');
        return newTipo;
    }
};