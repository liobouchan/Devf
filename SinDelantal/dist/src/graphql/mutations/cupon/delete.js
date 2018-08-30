'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _cupon = require('../../../models/cupon');

var _cupon2 = _interopRequireDefault(_cupon);

var _cupon3 = require('../../types/cupon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _cupon3.CuponType,
    args: {
        id: {
            name: 'ID',
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var deleteCupon = _cupon2.default.findByIdAndRemove(params.id).exec();
        if (!deleteCupon) throw Error('Error al borrar el cupon');
        return deleteCupon;
    }
};