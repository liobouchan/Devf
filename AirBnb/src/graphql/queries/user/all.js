import{
    GraphQLList
} from 'graphql'

import User from '../../../models/users'
import {UserType} from '../../types/users'

const queryAllUsers = {
    type: GraphQLList(UserType),
    resolve(){
        const users = User.find().exec();
        if(!users) throw new Error('Error al Traer los usuarios de la base da datos');
        return users;
    }
}

export default queryAllUsers;