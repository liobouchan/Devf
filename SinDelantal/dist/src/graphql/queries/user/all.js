'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _user = require('../../../models/user');

var _user2 = _interopRequireDefault(_user);

var _user3 = require('../../types/user');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllUsers = {
    type: (0, _graphql.GraphQLList)(_user3.UserType),
    resolve: function resolve() {
        var users = _user2.default.find().exec();
        if (!users) throw new Error('No se pudieron traer todos los usuarios');
        return users;
    }
};

exports.default = queryAllUsers;