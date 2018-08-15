import {
    GraphQLNonNull,
    GraphQLID
}from 'graphql'

import tipo_Restaurante from '../../../models/tipo_Restaurante'
import { type_RestaurantType } from '../../types/tipo_Restaurante';

const querySingleTipo_Restaurante = {
    type: type_RestaurantType,
    args:{
        id:{
            name: 'ID',
            type: GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params){
        const tipo = tipo_Restaurante.findById(params.id).exec();
        return tipo
    }
}

export default querySingleTipo_Restaurante