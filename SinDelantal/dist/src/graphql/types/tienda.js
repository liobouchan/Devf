'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreInputType = exports.StoreType = undefined;

var _graphql = require('graphql');

var _tipo_Restaurante = require('./tipo_Restaurante');

var _tipo_Restaurante2 = require('../../models/tipo_Restaurante');

var _tipo_Restaurante3 = _interopRequireDefault(_tipo_Restaurante2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StoreType = exports.StoreType = new _graphql.GraphQLObjectType({
  name: 'Tienda',
  description: 'Descripcion de las Tiendas en el sistema',
  fields: function fields() {
    return {
      _id: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
      },
      nombre: {
        type: _graphql.GraphQLString
      },
      direccion: {
        type: _graphql.GraphQLString
      },
      correo: {
        type: _graphql.GraphQLString
      },
      telefono: {
        type: _graphql.GraphQLInt
      },
      tipo_Restaurante: {
        type: _tipo_Restaurante.type_RestaurantType,
        resolve: function resolve(tipo) {
          var tipo_Restaurante = tipo.tipo_Restaurante;

          return _tipo_Restaurante3.default.findById(tipo_Restaurante).exec();
        }
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

var StoreInputType = exports.StoreInputType = new _graphql.GraphQLInputObjectType({
  name: 'addTienda',
  description: 'Descripcion de las Tiendas en el sistema',
  fields: function fields() {
    return {
      nombre: {
        type: _graphql.GraphQLString
      },
      direccion: {
        type: _graphql.GraphQLString
      },
      correo: {
        type: _graphql.GraphQLString
      },
      telefono: {
        type: _graphql.GraphQLInt
      },
      tipo_Restaurante: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
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