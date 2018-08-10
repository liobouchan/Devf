import{
    GraphQLList
} from 'graphql'

import User from '../../../models/user'
import {UserType} from '../../types/user'

const queryAllUsers = {
    type: GraphQLList(UserType),
    resolve(){
        const users = User.find().exec();
        if(!users) throw new Error('No se pudieron traer todos los usuarios');
        return users;
    }
}

export default queryAllUsers;