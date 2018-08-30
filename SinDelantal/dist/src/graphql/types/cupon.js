"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CuponInputType = exports.CuponType = undefined;

var _graphql = require("graphql");

var CuponType = exports.CuponType = new _graphql.GraphQLObjectType({
    name: "Cupones",
    description: "Cupones de descuento disponibles en la aplicacion",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            cupon: {
                type: _graphql.GraphQLString
            },
            descuento: {
                type: _graphql.GraphQLString
            },
            descripcion: {
                type: _graphql.GraphQLString
            }
        };
    }
});

var CuponInputType = exports.CuponInputType = new _graphql.GraphQLInputObjectType({
    name: "AddCupon",
    description: "Agrega cupones existentes para Promociones",
    fields: function fields() {
        return {
            cupon: {
                type: _graphql.GraphQLString
            },
            descuento: {
                type: _graphql.GraphQLString
            },
            descripcion: {
                type: _graphql.GraphQLString
            }
        };
    }
});