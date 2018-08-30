'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserType = undefined;

var _graphql = require('graphql');

var UserType = exports.UserType = new _graphql.GraphQLObjectType({
  name: 'Usuario',
  description: 'Usuarios de la Base de Datos',
  fields: function fields() {
    return {
      _id: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
      },
      nombre: {
        type: _graphql.GraphQLString
      },
      apellidos: {
        type: _graphql.GraphQLString
      },
      fecha_nacimiento: {
        type: _graphql.GraphQLString
      },
      correo: {
        type: _graphql.GraphQLString
      },
      telefono: {
        type: _graphql.GraphQLInt
      },
      genero: {
        type: _graphql.GraphQLString
      },
      username: {
        type: _graphql.GraphQLString
      },
      foto: {
        type: _graphql.GraphQLString
      },
      direcciones: {
        type: (0, _graphql.GraphQLList)(_graphql.GraphQLString)
      },
      card: {
        type: (0, _graphql.GraphQLList)(_graphql.GraphQLString)
      }
    };
  }
});