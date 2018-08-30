'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PedidosInputType = exports.PedidosType = undefined;

var _graphql = require('graphql');

var _cupon = require('./cupon');

var _cupon2 = require('../../models/cupon');

var _cupon3 = _interopRequireDefault(_cupon2);

var _user = require('../../graphql/types/user');

var _user2 = require('../../models/user');

var _user3 = _interopRequireDefault(_user2);

var _tienda = require('./tienda');

var _tienda2 = require('../../models/tienda');

var _tienda3 = _interopRequireDefault(_tienda2);

var _producto = require('./producto');

var _producto2 = require('../../models/producto');

var _producto3 = _interopRequireDefault(_producto2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PedidosType = exports.PedidosType = new _graphql.GraphQLObjectType({
    name: "Pedidos",
    description: "Pedidos de la apliacion",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            status_pedido: {
                type: _graphql.GraphQLBoolean
            },
            status_pago: {
                type: _graphql.GraphQLBoolean
            },
            direccion: {
                type: _graphql.GraphQLString
            },
            cupon: {
                type: _cupon.CuponType,
                resolve: function resolve(pedido) {
                    var cupon = pedido.cupon;

                    return _cupon3.default.findById(cupon).exe();
                }
            },
            user: {
                type: _user.UserType,
                resolve: function resolve(pedido) {
                    var user = pedido.user;

                    return _user3.default.findById(user).exe();
                }
            },
            tienda: {
                type: _tienda.StoreType,
                resolve: function resolve(pedido) {
                    var tienda = pedido.tienda;

                    return _tienda3.default.findById(tienda).exe();
                }
            },
            monto: {
                type: _graphql.GraphQLString
            },
            productos: {
                type: new _graphql.GraphQLList(_producto.ProductType),
                resolve: function resolve(pedido) {
                    var productos = pedido.productos;

                    return _producto3.default.find({ _id: { $in: productos } }).exec();
                }
            }
        };
    }
});

var PedidosInputType = exports.PedidosInputType = new _graphql.GraphQLInputObjectType({
    name: "addPedidos",
    description: "Pedidos de la apliacion",
    fields: function fields() {
        return {
            status_pedido: {
                type: _graphql.GraphQLBoolean
            },
            status_pago: {
                type: _graphql.GraphQLBoolean
            },
            direccion: {
                type: _graphql.GraphQLString
            },
            cupon: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            user: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            tienda: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            monto: {
                type: _graphql.GraphQLString
            },
            productos: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            }
        };
    }
});