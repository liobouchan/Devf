import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Store from '../../../models/tienda'
import { StoreType, StoreInputType } from '../../types/tienda';

export default {
    type: StoreType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:'data',
            type: new GraphQLNonNull(StoreInputType)
        }
    },
    resolve(root, params){
        return Store.findByIdAndUpdate(params.id, {$set:{...params.data}}, {new:true})
            .then(tienda => tienda)
            .catch(err => Error('Error al hacer el update de tienda'))
    }
}