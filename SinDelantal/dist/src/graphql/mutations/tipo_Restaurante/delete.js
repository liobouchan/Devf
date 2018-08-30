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
        id: {
            name: 'ID',
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var deleteTipo = _tipo_Restaurante2.default.findByIdAndRemove(params.id).exec();
        if (!deleteTipo) throw Error('Error al borrar un Tipo de restaurante');
        return deleteTipo;
    }
};