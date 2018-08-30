'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _cupon = require('../../../models/cupon');

var _cupon2 = _interopRequireDefault(_cupon);

var _cupon3 = require('../../types/cupon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllCupones = {
    type: new _graphql.GraphQLList(_cupon3.CuponType),
    resolve: function resolve() {
        var cupon = _cupon2.default.find.exec();
        return cupon;
    }
};
exports.default = queryAllCupones;