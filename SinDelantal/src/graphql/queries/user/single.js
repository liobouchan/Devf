import {GraphQLNonNull, GrapgQLID} from 'graphql'

import User from '../../../models/user'
import {UserType} from '../../types/user'

const querySingleUser = {
    type: UserType,
    args: {
        id: {
            name: 'ID',
            type: GraphQLNonNull(GrapgQLID)
        }
    },
    resolve(root, params){
        const user = User.findById(params.id).exec();
        return user;
    }
}

export default querySingleUser;