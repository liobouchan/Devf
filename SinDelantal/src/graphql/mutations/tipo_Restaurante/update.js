import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Tipo from '../../../models/tipo_Restaurante'
import { type_RestaurantType , type_RestaurantInputType } from '../../types/tipo_Restaurante';

export default {
    type: type_RestaurantType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:'data',
            type: new GraphQLNonNull(type_RestaurantInputType)
        }
    },
    resolve(root, params){
        return Tipo.findByIdAndUpdate(params.id, {$set:{...params.data}}, {new:true})
            .then(tipo => tipo)
            .catch(err => Error('Error al hacer el update'))
    }
}