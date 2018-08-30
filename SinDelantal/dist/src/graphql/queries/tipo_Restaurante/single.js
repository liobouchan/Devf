'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _tipo_Restaurante = require('../../../models/tipo_Restaurante');

var _tipo_Restaurante2 = _interopRequireDefault(_tipo_Restaurante);

var _tipo_Restaurante3 = require('../../types/tipo_Restaurante');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querySingleTipo_Restaurante = {
    type: _tipo_Restaurante3.type_RestaurantType,
    args: {
        id: {
            name: 'ID',
            type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var tipo = _tipo_Restaurante2.default.findById(params.id).exec();
        return tipo;
    }
};

exports.default = querySingleTipo_Restaurante;