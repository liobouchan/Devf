'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProductInputType = exports.ProductType = undefined;

var _graphql = require('graphql');

var _tienda = require('./tienda');

var _tienda2 = require('../../models/tienda');

var _tienda3 = _interopRequireDefault(_tienda2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductType = exports.ProductType = new _graphql.GraphQLObjectType({
    name: 'Producto',
    description: 'Productos que se van a poder vender en las tiendas',
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            nombre: {
                type: _graphql.GraphQLString
            },
            precio: {
                type: _graphql.GraphQLString
            },
            foto: {
                type: _graphql.GraphQLString
            },
            descripcion: {
                type: _graphql.GraphQLString
            },
            tipo: {
                type: _graphql.GraphQLString
            },
            tienda: {
                type: _tienda.StoreType,
                resolve: function resolve(store) {
                    var tienda = store.tienda;

                    return _tienda3.default.findById(tienda).exec();
                }
            }
        };
    }
});

var ProductInputType = exports.ProductInputType = new _graphql.GraphQLInputObjectType({
    name: 'addProducto',
    description: 'Productos que se van a poder vender en las tiendas',
    fields: function fields() {
        return {
            nombre: {
                type: _graphql.GraphQLString
            },
            precio: {
                type: _graphql.GraphQLString
            },
            foto: {
                type: _graphql.GraphQLString
            },
            descripcion: {
                type: _graphql.GraphQLString
            },
            tipo: {
                type: _graphql.GraphQLString
            },
            tienda: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            }
        };
    }
});