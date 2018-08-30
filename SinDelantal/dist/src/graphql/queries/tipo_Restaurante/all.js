'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _tipo_Restaurante = require('../../../models/tipo_Restaurante');

var _tipo_Restaurante2 = _interopRequireDefault(_tipo_Restaurante);

var _tipo_Restaurante3 = require('../../types/tipo_Restaurante');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAlltipo_Restaurantes = {
    type: (0, _graphql.GraphQLList)(_tipo_Restaurante3.type_RestaurantType),
    resolve: function resolve() {
        var tipos = _tipo_Restaurante2.default.find().exec();
        if (!tipos) throw new Error('No se pudieron obtener todos los tipos de restaurantes');
        return tipos;
    }
};

exports.default = queryAlltipo_Restaurantes;