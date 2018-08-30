'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreInputType = exports.StoreType = undefined;

var _graphql = require('graphql');

var _tipo_Restaurante = require('./tipo_Restaurante');

var _tipo_Restaurante2 = require('../../models/tipo_Restaurante');

var _tipo_Restaurante3 = _interopRequireDefault(_tipo_Restaurante2);

var _producto = require('./producto');

var _producto2 = require('../../models/producto');

var _producto3 = _interopRequireDefault(_producto2);

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
      calificacion: {
        type: _graphql.GraphQLString
      },
      horario: {
        type: _graphql.GraphQLString
      },
      descripcion: {
        type: _graphql.GraphQLString
      },
      foto: {
        type: _graphql.GraphQLString
      },
      costo: {
        type: _graphql.GraphQLString
      },
      productos: {
        type: _producto.ProductType,
        resolve: function resolve(product) {
          var productos = product.productos;

          return _producto3.default.findById(productos).exec();
        }
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
      calificacion: {
        type: _graphql.GraphQLString
      },
      horario: {
        type: _graphql.GraphQLString
      },
      descripcion: {
        type: _graphql.GraphQLString
      },
      foto: {
        type: _graphql.GraphQLString
      },
      costo: {
        type: _graphql.GraphQLString
      },
      productos: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
      }
    };
  }
});