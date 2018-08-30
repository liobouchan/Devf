'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type_RestaurantInputType = exports.type_RestaurantType = undefined;

var _graphql = require('graphql');

var type_RestaurantType = exports.type_RestaurantType = new _graphql.GraphQLObjectType({
  name: 'tipo_Restaurante',
  description: 'Que tipo de restaurante es la comida',
  fields: function fields() {
    return {
      _id: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
      },
      nombre: {
        type: _graphql.GraphQLString
      },
      descripcion: {
        type: _graphql.GraphQLString
      }
    };
  }
});

var type_RestaurantInputType = exports.type_RestaurantInputType = new _graphql.GraphQLInputObjectType({
  name: 'addTipo_Restaurante',
  description: 'Que tipo de restaurante es la comida',
  fields: function fields() {
    return {
      nombre: {
        type: _graphql.GraphQLString
      },
      descripcion: {
        type: _graphql.GraphQLString
      }
    };
  }
});